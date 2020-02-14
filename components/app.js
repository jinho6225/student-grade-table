class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.getGrades = this.getGrades.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this)
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  updateGrade(id, name, course, grade) {
    const data = { name: name,
                  course: course,
                  grade: grade}
    fetch(`http://localhost:3000/sgt/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.getGrades()
    })
  }
  handleUpdateGradeError(error) {
    console.log(error)
  }
  handleUpdateGradeSuccess() {
    this.getGrades()
  }

  deleteGrade(id) {
    fetch(`http://localhost:3000/sgt/${id}`, { method: 'DELETE' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.getGrades()
    })
  }
  handleDeleteGradeError(error) {
    console.log(error)
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
  }

  createGrade(name, course, grade) {
    const data = { name: name,
                  course: course,
                  grade: grade}
    fetch(`http://localhost:3000/sgt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.getGrades()
    })
  }
  handleCreateGradeError(error) {
    console.log(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades()
  }

  getGrades() {
    fetch(`http://localhost:3000/sgt`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.handleGetGradesSuccess(data)
    });
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

  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
    this.gradeTable.onUpdateClick(this.updateGrade)
  }
}
