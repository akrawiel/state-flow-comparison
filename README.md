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

[Vuex]: https://next.vuex.vuejs.org/
[XState]: https://xstate.js.org/
[Recoil]: https://recoiljs.org/
[Redux]: https://redux.js.org/
[MobX]: https://mobx.js.org/
[Unstated-next]: https://github.com/jamiebuilds/unstated-next

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

# To implement

- React + Jotai
- React + XState
- Vanilla React
- Svelte + Zustand
- Svelte + Baobab
- Svelte + Effector
- Svelte + @xstate/fsm (possibly replace existing XState implementation)
- Svelte + Akita
- Vue + XState
- Vanilla JS
- Aurelia
- Imba (stable v1 / unstable v2)
- mithril.js
- Hyperapp
- Apline.js + Spruce
- Angular + rxjs
- Vanilla Angular
- Backbone
- Ember + Concurrency
- re-frame
- Reason (w/ ReasonReact)
- Nim (w/ JS backend)
- Zig (w/ WASM backend)
- Rust (w/ WASM backend, possibly + Yew framework)
- Scala.js
- Purescript

(React will be replaced with Preact where possible)
