class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody')
    tbody.textContent = ""
    if (grades.length === 0) {
      this.noGradesElement.classList.remove('d-none')
    } else {
      grades.forEach((e) => {
        this.renderGradeRow(e, this.deleteGrade)
      })
    }

  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tbody = this.tableElement.querySelector('tbody')
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    td1.classList.add("text-center")
    var td2 = document.createElement('td')
    td2.classList.add("text-center")
    var td3 = document.createElement('td')
    td3.classList.add("text-center")
    td1.textContent = data.name
    td2.textContent = data.course
    td3.textContent = data.grade
    var td4 = document.createElement('td')
    td4.classList.add("text-center")
    var btn = document.createElement('button')
    btn.classList.add('btn', 'btn-danger')
    btn.textContent = "DELETE"
    td4.append(btn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    btn.addEventListener('click', function() {
      deleteGrade(data.id)
    })
    tbody.appendChild(tr)
  }
}
