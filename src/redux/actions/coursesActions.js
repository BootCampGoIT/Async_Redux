import coursesConstants from "../constants/coursesConstants"

const addCourse = (course) => {
    return {
        type: coursesConstants.addCourse,
        payload: course
    }
}

const removeCourse = (id) => ({
    type: coursesConstants.removeCourse,
    payload: id
})

const setCourses = (courses) => {
    return {
        type: coursesConstants.setCourses,
        payload: courses
    }
}

export default { addCourse, removeCourse, setCourses };