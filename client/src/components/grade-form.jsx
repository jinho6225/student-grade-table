import React, { Component } from 'react';

class GradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  resetHandler(e) {
    e.preventDefault();
    const { editing, currentUpdating } = this.props;
    editing();
    currentUpdating(null);
    this.setState({
      name: '',
      course: '',
      grade: '',
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentEditing, editing, isLogined } = this.props;
    if (!currentEditing) {
      if (isLogined) {
        this.props.postGrade(this.state);
        this.setState({
          name: '',
          course: '',
          grade: '',
        });
      }
    }
    if (currentEditing) {
      if (isLogined) {
        this.props.updateGrade(currentEditing, this.state);
        this.setState({
          name: '',
          course: '',
          grade: '',
        });
        editing();
      }
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidUpdate(prevProps) {
    const { currentEditing } = this.props;
    if (currentEditing !== prevProps.currentEditing) {
      if (currentEditing === null) {
        this.setState({
          name: '',
          course: '',
          grade: '',
        });
      } else {
        this.setState({
          name: currentEditing.name,
          course: currentEditing.course,
          grade: currentEditing.grade,
        });
      }
    }
  }

  render() {
    const { isEditing } = this.props;
    return (
      <div className="col-12 order-1 col-md-4 order-md-2">
        <h5 className="mb-2">{isEditing ? 'Update Grade' : 'Add Grade'}</h5>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-user-graduate"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Student Name"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-book-open"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Course"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              <input
                type="number"
                min="0"
                max="100"
                className="form-control"
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange}
                placeholder="Grade"
              />
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-success mx-1">
                {isEditing ? 'Update' : 'Add'}
              </button>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={this.resetHandler}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GradeForm;
