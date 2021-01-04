import { readable } from 'svelte/store'
import create from 'zustand/vanilla'

const createStore = store => {
  const zustandStore = create(store)

  const svelteStore = readable(
    zustandStore.getState(),
    set => {
      zustandStore.subscribe(
        newState => {
          set(newState)
        },
        state => state
      )

      return () => {
        zustandStore.destroy()
      }
    }
  ) 

  return svelteStore
}

export default createStore
