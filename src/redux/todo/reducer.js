import { loadData, saveData } from "../../utils/localStorage";
import {ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, 
        DELETE_SUCCESS,  
        GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS} from "./actionTypes"

const initState = {
    note: loadData("note") || [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case ADD_NOTE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false 
            }
        }
        case ADD_NOTE_SUCCESS: {
            const updatedNote = [...state.note, payload];
            saveData("note", updatedNote)
            return {
                ...state,
                note: updatedNote
            }
        }
        case ADD_NOTE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true 

            }
        }
        case GET_NOTE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false 
            }
        }
        case GET_NOTE_SUCCESS: {
            return {
                ...state,
                note: payload,
                isLoading: false,
            }
        }
        case GET_NOTE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true 

            }
        }
        case DELETE_SUCCESS: {
            return {
                ...state,
                note: state.note.filter(item => item.id !== payload)
            }
        }
        default: 
            return state;
    }
}