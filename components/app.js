class App {
  constructor() {
    this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess.bind(this)
  }

  handleGetGradesError(error) {
    console.log(error)
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
  }

  getGrades() {
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      method:"GET",
      headers:{"x-access-token":"dO5Ox6r1"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades()
  }
}
