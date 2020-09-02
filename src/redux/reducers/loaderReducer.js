import loaderConstants from "../constants/loaderConstants";

export default (state = false, { type }) => {
    switch (type) {
        case loaderConstants.loaderOn:
            return state = true
        case loaderConstants.loaderOff:
            return state = false
        default:
            return state
    }
};