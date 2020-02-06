class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody')
    grades.forEach((x) => {
      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      td1.textContent = x.name
      var td2 = document.createElement('td')
      td2.textContent = x.course
      var td3 = document.createElement('td')
      td3.textContent = x.grade
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tbody.appendChild(tr)
    })
  }
}
