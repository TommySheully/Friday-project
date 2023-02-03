import {Dispatch} from 'redux'

const initialState: [] = []

export const createNewPassReducer = (state: [] = initialState, action: ActionsType): [] => {
    switch (action.type) {
        case 'ADD-DATA':
            return state
        case 'CLEAR-DATA':
            return []
        default:
            return state
    }
}

// Action Create
export const addDataAC = () => ({type: 'ADD-DATA'} as const)
export const clearDataAC = () => ({type: 'CLEAR-DATA'} as const)

// thunks
export const doTC = (props: any) => {
    return (dispatch: Dispatch<ActionsType>) => {    }
}

// typesAC
export type addDataACACType = ReturnType<typeof addDataAC>;
export type clearDataACType = ReturnType<typeof clearDataAC>;

type ActionsType =
    | addDataACACType
    | clearDataACType


