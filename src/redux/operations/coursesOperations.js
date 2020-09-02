import axios from "axios";
import loaderActions from "../actions/loaderActions"
import coursesActions from "../actions/coursesActions";
import errorActions from "../actions/errorActions";

const addCourseOperation = (course) => async dispatch => {
    dispatch(loaderActions.loaderOn());
    dispatch(errorActions.resetError());//baaaaaad
    try {
        const result = await axios.post(`https://courseited.firebaseio.com/corses.json`, course);
        dispatch(coursesActions.addCourse({ ...course, id: result.data.name }))
    } catch (error) {
        dispatch(errorActions.addError("Something went wrong"))
    }
    finally {
        dispatch(loaderActions.loaderOff())
    }
}

const getCourseOperation = () => async dispatch => {
    dispatch(loaderActions.loaderOn());
    dispatch(errorActions.resetError());//baaaaaad
    try {
        const result = await axios.get(`https://courseited.firebaseio.com/corses.json`);
        const keys = Object.keys(result.data);
        const data = keys.reduce((acc, key) => {
            acc.push({ id: key, ...result.data[key] })
            return acc;
        }, [])
        dispatch(coursesActions.setCourses(data))
    } catch (error) {
        dispatch(errorActions.addError("Something went wrong"))
    }
    finally {
        dispatch(loaderActions.loaderOff())
    }
}

export default { addCourseOperation, getCourseOperation };