class GradeForm {
  constructor(formElement) {
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement = formElement;
    this.formElement.addEventListener('submit', this.handleSubmit)
    this.onSubmit = this.onSubmit.bind(this)
    this.createGrade;
    this.updateGrade;
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade
  }

  handleSubmit(e) {
    e.preventDefault()
    var formData = new FormData(e.target)
    var name = formData.get("name")
    var course = formData.get("course")
    var grade = formData.get("grade")
    this.createGrade(name, course, grade)
    this.formElement.reset()
  }

}
