import { INITIALIZE_INPUT_DATA, ADD_INPUT_DATA } from "../ActionTypes";

export const initializeInputData = () => ({type: INITIALIZE_INPUT_DATA})

export const addInputData = (nickName, content) =>  ({ type: ADD_INPUT_DATA, payload: { nickName, content } });