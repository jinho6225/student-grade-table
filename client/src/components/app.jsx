import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import Footer from './footer.jsx';
import GradeTable from './grade-table.jsx';
import GradeForm from './grade-form.jsx';
import Auth from './Pages/Auth';
import { Provider } from '../store.jsx';
import { Switch, Route } from 'react-router-dom';
import storage from '../lib/storage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.createUser = ({ email, password }) => {
      fetch('/auth/register/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res)
        .then((data) => {
          if (data.status === 200) {
            this.setState({
              isLogined: !this.state.isLogined,
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    this.loginUser = ({ email, password }) => {
      fetch('/auth/login/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res)
        .then((data) => {
          if (data.status === 200) {
            this.setState({
              isLogined: !this.state.isLogined,
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    this.state = {
      grades: [],
      isEditing: 0,
      currentEditing: null,
      createUser: this.createUser,
      loginUser: this.loginUser,
      isLogined: false,
      currentUser: null,
    };
    this.postGrade = this.postGrade.bind(this);
    this.getGrade = this.getGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.currentUpdating = this.currentUpdating.bind(this);
    this.editing = this.editing.bind(this);
    this.getGradeByName = this.getGradeByName.bind(this);
    this.getGradeByCourse = this.getGradeByCourse.bind(this);
    this.getOneByName = this.getOneByName.bind(this);
    this.getOneByCourse = this.getOneByCourse.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLogined !== prevState.isLogined) {
      this.setState({
        currentUser: storage.get('loggedInfo'),
      });
    }
  }

  getOneByCourse(course) {
    fetch(`/sgt/course/${course}`)
      .then((res) => res.json())
      .then((grades) => {
        this.setState({ grades });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  getOneByName(name) {
    fetch(`/sgt/name/${name}`)
      .then((res) => res.json())
      .then((grades) => {
        this.setState({ grades });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  getGradeByCourse() {
    fetch('/sgt/course')
      .then((res) => res.json())
      .then((grades) => {
        this.setState({ grades });
      });
  }

  getGradeByName() {
    fetch('/sgt/name')
      .then((res) => res.json())
      .then((grades) => {
        this.setState({ grades });
      });
  }

  editing(id) {
    this.setState({
      isEditing: id,
    });
  }

  currentUpdating(grade) {
    this.setState({
      currentEditing: grade,
    });
  }

  updateGrade(id, obj) {
    fetch(`/sgt/${id.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res)
      .then((grade) => {
        if (grade.status === 204) {
          this.getGrade();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  deleteGrade(id) {
    fetch(`/sgt/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res)
      .then(() => {
        this.getGrade();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  postGrade(data) {
    fetch('/sgt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((grade) => {
        if (grade) {
          this.getGrade();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    this.getGrade();
  }

  getAverageGrade() {
    const { grades } = this.state;
    const total = grades.reduce((acc, cur) => acc + Number(cur.grade), 0);
    return Math.round(total / grades.length);
  }

  getGrade() {
    fetch('/sgt')
      .then((res) => res.json())
      .then((grades) => {
        this.setState({ grades });
      });
  }

  render() {
    const { grades, isEditing, currentEditing, isLogined } = this.state;
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Provider value={this.state}>
              <HeaderContainer
                average={this.getAverageGrade()}
                getGrade={this.getGrade}
              />

              <main className="container d-flex flex-wrap justify-content-around py-5">
                <GradeTable
                  isLogined={isLogined}
                  grades={grades}
                  deleteGrade={this.deleteGrade}
                  editing={this.editing}
                  currentUpdating={this.currentUpdating}
                  getGradeByName={this.getGradeByName}
                  getGradeByCourse={this.getGradeByCourse}
                  getOneByName={this.getOneByName}
                  getOneByCourse={this.getOneByCourse}
                />
                <GradeForm
                  postGrade={this.postGrade}
                  currentEditing={currentEditing}
                  isEditing={isEditing}
                  editing={this.editing}
                  currentUpdating={this.currentUpdating}
                  updateGrade={this.updateGrade}
                />
              </main>
              <Footer />
            </Provider>
          </Route>

          <Route path="/auth" component={Auth}>
            <Provider value={this.state}>
              <Auth />
            </Provider>
          </Route>
        </Switch>
      </>
    );
  }
}
