import errorConstants from "../constants/errorConstants";

const addError = (error) => {
    return {
        type: errorConstants.addError,
        payload: error
    }
}

const resetError = () => {
    return {
        type: errorConstants.resetError
    }
}
export default { addError, resetError };