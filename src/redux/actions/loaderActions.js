import loaderConstants from "../constants/loaderConstants"

const loaderOn = () => {
    return {
        type: loaderConstants.loaderOn
    }
}
const loaderOff = () => {
    return {
        type: loaderConstants.loaderOff
    }
}

export default {loaderOn, loaderOff};