class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.log(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
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
