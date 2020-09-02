import coursesConstants from "../constants/coursesConstants";


const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case coursesConstants.addCourse:
            return [...state, payload];
        case coursesConstants.removeCourse:
            return [...state.filter(course => course.id !== payload)];
        case coursesConstants.setCourses:
            return [...payload];
        default:
            return state;
    }

};