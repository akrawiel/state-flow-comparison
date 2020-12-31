# State flow comparison

Comparison of basic todo apps using JS frameworks &amp; state management libraries

# Setup

To run the project follow these steps:

1. Run `yarn` in the cloned repository
2. Run `yarn bootstrap` in the cloned repository
3. Run `yarn dev` to interactively select development servers to run or `yarn
   build` to interactively select packages to build

# Currently implemented

[Gnomon]: https://github.com/paypal/gnomon
[Vue]: https://v3.vuejs.org/
[Vuex]: https://next.vuex.vuejs.org/
[Vite]: https://github.com/vitejs/vite
[Svelte]: https://svelte.dev/
[XState]: https://xstate.js.org/
[Snowpack]: https://www.snowpack.dev/
[Elm]: https://elm-lang.org/
[Parcel]: https://parceljs.org/

|Used set|Approximate build size|Approximate build time (measured with [Gnomon])|
|---|---|---|
|[Vue] + [Vuex] w/ [Vite]|66.4 KB|2.4070s|
|[Svelte] + [XState] w/ [Snowpack]|69.7 KB|1.5606s|
|[Elm] w/ [Parcel]|30.4 KB|1.4230s|
|[Vue] (vanilla) w/ [Vite]|58 KB|1.7538s|

# To implement

- Vanilla Svelte
- React + Recoil
- React + Redux
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
