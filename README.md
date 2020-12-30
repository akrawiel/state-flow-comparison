# State flow comparison

Comparison of basic todo apps using JS frameworks &amp; state management libraries

# Setup

To run the project follow these steps:

1. Run `yarn` in the cloned repository
2. Run `yarn bootstrap` in the cloned repository
3. Run `yarn dev` to run all the development servers or `yarn build` to run all
   the building processes

# Currently implemented

|Used set|Approximate build size|
|---|---|
|Vue + Vuex w/ Vite|66.4 KB|
|Svelte + XState w/ Snowpack|69.7 KB|
|Elm w/ Parcel (w/o nanoid)|30.4 KB|

# To implement

- Vanilla Vue
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

(replace React with Preact where possible)

# To add

- add library links
- approximate build time
- dev servers ports info
- script to run servers selectively
