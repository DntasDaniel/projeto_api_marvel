import { createContext } from 'react'

export const INITIAL_STATE = {}
export const ContextGlobal = createContext({
    state: INITIAL_STATE
})