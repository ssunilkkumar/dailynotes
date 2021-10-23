import { ADD_NOTE_FAILURE, ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, 
        GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS,  
        DELETE_SUCCESS} from "./actionTypes"

const addNoteRequest = () => {
    return {
        type: ADD_NOTE_REQUEST
    }
}
const addNoteSuccess = (payload) => {
    return {
        type: ADD_NOTE_SUCCESS,
        payload
    }
}
const addNoteFailure = (error) => {
    return {
        type: ADD_NOTE_FAILURE,
        payload: error
    }
}

const getNoteRequest = () => {
    return {
        type: GET_NOTE_REQUEST
    }
}
const getNoteSuccess = (payload) => {
    return {
        type: GET_NOTE_SUCCESS,
        payload
    }
}
const getNoteFailure = (error) => {
    return {
        type: GET_NOTE_FAILURE,
        payload: error
    }
}

const deleteNote = (id) => {
    return {
        type: DELETE_SUCCESS,
        payload: id
    }
}

export {
    addNoteRequest,
    addNoteSuccess,
    addNoteFailure,
    getNoteRequest,
    getNoteSuccess,
    getNoteFailure,
    deleteNote,
}