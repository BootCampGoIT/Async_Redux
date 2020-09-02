import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import coursesOperations from '../../redux/operations/coursesOperations';
import { connect } from 'react-redux';

class Main extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        this.props.getCourseOperation()
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCourseOperation({ ...this.state })
        this.setState({ name: '' })
    }


    render() {
        const { name } = this.state;
        return (
            <div style={{ display: 'flex' }}>
                <SideBar />
                {this.props.isLoading
                    ? <h1>...loading</h1>
                    : <>
                        {this.props.isError && <h2>Error: {this.props.error} </h2>}
                        <form onSubmit={this.handleSubmit}>
                            <label>Enter course name: <input type="text" onChange={this.handleChange} value={name} /></label>
                            <button type="submit">Add course</button>
                        </form>

                    </>

                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.loading,
        isError: state.error ? true : false,
        error: state.error
    }
}

const mapDispatchToProps = {
    addCourseOperation: coursesOperations.addCourseOperation,
    getCourseOperation: coursesOperations.getCourseOperation
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);