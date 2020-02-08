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
      document.querySelector('.nothing').classList.remove('d-none')
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
    td4.classList.add("d-flex", "justify-content-around")
    var i1 = document.createElement('i')
    var i2 = document.createElement('i')
    td4.append(i1)
    td4.append(i2)
    i1.classList.add('fas', 'fa-edit')
    i2.classList.add('fas', 'fa-trash-alt')
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    i2.addEventListener('click', function() {
      deleteGrade(data.id)
    })

    i1.addEventListener('click', function() {
      var a = Array.from(document.querySelector('form').children)
      a[1].childNodes[1].value = data.id
      a[2].childNodes[3].value = data.name
      a[3].childNodes[3].value = data.course
      a[4].childNodes[3].value = data.grade
      a[5].classList.add("d-none")
      document.querySelector('.btn-warning').classList.remove('d-none')
    })



    tbody.appendChild(tr)
  }
}
