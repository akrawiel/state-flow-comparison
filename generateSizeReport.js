const chalk = require('chalk');
const path = require('path');
const execa = require('execa');

const packageInfo = require('./packageInfo');

console.log(chalk.blue.bold('Initializing size calculations...\n'))

const sizes = packageInfo.reduce(
  (accumulatedSizesInfo, { value: { name, package, buildDirectory } }) => {
    const buildPath = path.resolve(__dirname, 'packages', package, buildDirectory);

    let sizes = {
      uncompressed: '-',
      compressed: '-'
    };

    try {
      const byteSizeRaw = execa.commandSync(`du -sb ${buildPath}`);
      const [byteSize] = byteSizeRaw.stdout.split(/\s+/);
      const formattedByteSize = ((Number(byteSize) || 0) / 1000).toFixed(2);

      const compressedBytes = execa.commandSync(`gzip -cr ${buildPath}`);
      const compressedBytesBuffer = Buffer.from(compressedBytes.stdout);
      const compressedFormattedByteSize = (
        (Number(compressedBytesBuffer.byteLength) || 0) / 1000
      ).toFixed(2);

      console.log(
        `${chalk.dim(`[${name}]`)} ${chalk.green.bold('Success')}`
      );

      sizes.uncompressed = `${formattedByteSize}KB`;
      sizes.compressed = `${compressedFormattedByteSize}KB`;
    } catch (error) {
      console.log(
        `${chalk.dim(`[${name}]`)} ${chalk.red.bold('Error')}`
      );
    }

    return {
      ...accumulatedSizesInfo,
      [package]: sizes
    };
  },
  {}
);

console.table(sizes);
