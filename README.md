# State flow comparison

Comparison of basic todo apps using JS frameworks &amp; state management libraries

# Setup

To run the project follow these steps:

1. Run `yarn` in the cloned repository
2. Run `yarn bootstrap` in the cloned repository
3. Run `yarn dev` to interactively select development servers to run or `yarn
   build` to interactively select packages to build
4. Run `yarn size-report` to generate bundle size report (tested only on Linux,
   `gzip` & `du` commands are required in your `PATH` env variable)

# Currently implemented

[Gnomon]: https://github.com/paypal/gnomon

[Parcel]: https://parceljs.org/
[Snowpack]: https://www.snowpack.dev/

[Vue]: https://v3.vuejs.org/
[Vite]: https://github.com/vitejs/vite
[Svelte]: https://svelte.dev/
[Elm]: https://elm-lang.org/
[Preact]: https://preactjs.com/
[React]: https://reactjs.org/

[Vuex]: https://next.vuex.vuejs.org/
[XState]: https://xstate.js.org/
[Recoil]: https://recoiljs.org/
[Redux]: https://redux.js.org/
[MobX]: https://mobx.js.org/
[Unstated-next]: https://github.com/jamiebuilds/unstated-next
[Jotai]: https://jotai.surge.sh/
[Zustand]: https://zustand.surge.sh/
[Effector]: https://effector.dev/
[XState FSM]: https://xstate.js.org/docs/packages/xstate-fsm/
[Akita]: https://datorama.github.io/akita/
[Vanilla JS]: http://vanilla-js.com/
[Mithril JS]: https://mithril.js.org/
[Hyperapp]: https://github.com/JorgeBucaran/hyperapp

|Used set|Build size (uncompressed)|Build size (gzipped)|Approx build time (measured with [Gnomon])|
|---|---|---|---|
|[Vue] + [Vuex] w/ [Vite]                       | 67.99KB| 40.17KB|2.4070s|
|[Svelte] + [XState] w/ [Snowpack]              | 71.40KB| 33.65KB|1.5606s|
|[Elm] w/ [Parcel]                              | 31.13KB| 19.69KB|1.4230s|
|[Vue] (vanilla) w/ [Vite]                      | 59.36KB| 35.66KB|1.7538s|
|[Svelte] (vanilla) w/ [Snowpack]               | 20.59KB|  6.72KB|0.5739s|
|[Preact] + [Recoil] w/ [Snowpack]              | 82.34KB| 42.54KB|1.3348s|
|[Preact] + [Redux] w/ [Snowpack]               | 47.53KB| 23.69KB|2.1215s|
|[Preact] + [MobX] w/ [Snowpack]                | 86.39KB| 43.54KB|3.0521s|
|[Preact] + [Unstated-next] w/ [Snowpack]       | 37.67KB| 16.99KB|1.3882s|
|[React] + [Jotai] w/ [Snowpack]                |158.82KB| 86.56KB|3.4635s|
|[Preact] + [XState] w/ [Snowpack]              | 86.62KB| 43.08KB|2.6460s|
|[Preact] w/ [Snowpack]                         | 25.44KB|  9.72KB|1.1813s|
|[Svelte] + [Zustand] w/ [Snowpack]             | 24.84KB|  9.25KB|0.6132s|
|[Svelte] + [Effector] w/ [Snowpack]            | 31.24KB| 14.97KB|0.6925s|
|[Svelte] + [XState FSM] w/ [Snowpack]          | 27.25KB| 11.23KB|0.5992s|
|[Svelte] + [Akita] w/ [Snowpack]               |101.13KB| 44.38KB|1.8544s|
|[Vue] + [XState] w/ [Vite]                     |140.48KB| 81.76KB|2.8134s|
|[Vanilla JS] w/ [Snowpack]                     | 18.09KB|  4.62KB|0.3244s|
|[Mithril JS] w/ [Snowpack]                     | 44.17KB| 21.29KB|0.9786s|
|[Hyperapp] w/ [Snowpack]                       | 19.50KB|  5.84KB|0.5381s|

# To implement

- Alpine.js
- Angular + rxjs
- Vanilla Angular
- Backbone
- Ember
- re-frame
- Reason (w/ ReasonReact)
- Nim (w/ JS backend)
- Zig (w/ WASM backend)
- Rust (w/ WASM backend, possibly + Yew framework)
- Blazor.NET
- Scala.js
- Purescript
