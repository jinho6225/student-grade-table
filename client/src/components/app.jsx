import React from "react";
import Header from './header.jsx'
import GradeTable from './grade-table.jsx'
import GradeForm from './grade-form.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grades: []
    }
    this.postGrade = this.postGrade.bind(this)
    this.getGrade = this.getGrade.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
  }

  deleteGrade(id) {
    fetch(`/sgt/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(grade => {
      if (grade.affectedRows > 0) {
        this.getGrade()
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  postGrade(data) {
    fetch('/sgt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(grade => {
      if (grade.affectedRows > 0) {
        this.getGrade()
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  componentDidMount() {
    this.getGrade()
  }

  getAverageGrade() {
    const { grades } = this.state;
    const total = grades.reduce((acc, cur) => {
      return acc + Number(cur.grade)
    }, 0)
    return Math.round(total / grades.length)
  }

  getGrade() {
    fetch(`/sgt`)
    .then(res => res.json())
    .then(grades => this.setState({ grades }))
  }

  render() {
    const { grades } = this.state
    return (
      <div className="container">
        <Header average={this.getAverageGrade()}/>
        <div className="row">
          <GradeTable className="col-8" grades={grades} deleteGrade={this.deleteGrade} />
          <GradeForm className="col-4" postGrade={this.postGrade} />
        </div>
      </div>
    )
  }
}
