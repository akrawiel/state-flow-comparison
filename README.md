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

|Used set|Build size (uncompressed)|Build size (gzipped)|Approx build time (measured with [Gnomon])|
|---|---|---|---|
|[Vue] + [Vuex] w/ [Vite]         | 67.99KB|40.17KB|2.4070s|
|[Svelte] + [XState] w/ [Snowpack]| 71.40KB|33.65KB|1.5606s|
|[Elm] w/ [Parcel]                | 31.13KB|19.69KB|1.4230s|
|[Vue] (vanilla) w/ [Vite]        | 59.36KB|35.66KB|1.7538s|
|[Svelte] (vanilla) w/ [Snowpack] | 20.59KB| 6.72KB|0.5739s|
|[Preact] + [Recoil] w/ [Snowpack]| 82.34KB|42.54KB|1.3348s|
|[React] + [Redux] w/ [Snowpack]  |160.18KB|86.65KB|3.7088s|

# To implement

- React + MobX
- React + Unstated-next
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
