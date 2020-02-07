class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.log(error)
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var total = 0
    for (let i = 0; i < grades.length; i++) {
      total = total + grades[i].grade
    }
    var computedAvg = total / grades.length;
    this.pageHeader.updateAverage(computedAvg)
  }

  createGrade(name, course, grade) {
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      method:"POST",
      headers:{"x-access-token":"dO5Ox6r1"},
      data:{ "name": name,
            "course": course,
            "grade": grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error) {
    console.log(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades()
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
    this.gradeForm.onSubmit(this.createGrade)
  }

}
