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
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }

  deleteGrade(id) {
    $.ajax({
    url: `http://sgt.lfzprototypes.com/api/grades/${id}`,
    method:"DELETE",
    headers:{"x-access-token":"dO5Ox6r1"},
    success: this.handleCreateGradeSuccess,
    error: this.handleCreateGradeError
    })
  }

  handleDeleteGradeError(error) {
    console.log(error)
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
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
    this.pageHeader.updateAverage(Math.round(computedAvg))
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

  updateGrade(id, name, course, grade) {
    $.ajax({
      url: `http://sgt.lfzprototypes.com/api/grades/${id}`,
      method:"PATCH",
      headers:{"x-access-token":"dO5Ox6r1"},
      data:{ "name": name,
            "course": course,
            "grade": grade}
    })
    console.log('hey')
  }

  updateBtn() {
    var a = Array.from(document.querySelector('form').children)
    var id  = Number(a[1].childNodes[1].value) // id
    var name = a[2].childNodes[3].value // name
    var course = a[3].childNodes[3].value // course
    var grade = Number(a[4].childNodes[3].value) // point
    this.updateGrade(id, name, course, grade)
    this.getGrades()
    document.querySelector('.btn-warning').classList.add('d-none')
    document.querySelector('.btn-success').classList.remove('d-none')
    a[1].childNodes[1].value = ""
    a[2].childNodes[3].value = ""
    a[3].childNodes[3].value = ""
    a[4].childNodes[3].value = ""
  }

  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }




}
