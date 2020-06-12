import { INITIALIZE_INPUT_DATA, ADD_INPUT_DATA } from "../ActionTypes"

const initialState = {
    nickName: "",
    content: ""
}

export default function inputData (state = initialState, action) {

    switch (action.type) {
        case INITIALIZE_INPUT_DATA:
            return {
                ...state,
                    nickName:"",
                    content: ""
            }
        case ADD_INPUT_DATA:

            return {
                ...state,
                [action.payload.nickName]:action.payload.content
            };
      
        default:
            return state;
    }
}