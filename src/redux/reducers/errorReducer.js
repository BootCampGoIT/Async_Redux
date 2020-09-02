import errorConstants from "../constants/errorConstants";

export default (state = "", { type, payload }) => {
    switch (type) {
        case errorConstants.addError:
            return state = payload
        case errorConstants.resetError:
            return state = ''
        default:
            return state;
    }
};