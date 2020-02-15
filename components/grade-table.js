class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.deleteGrade;
    this.updateGrade
  }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody')
    tbody.textContent = ""
    if (grades.length === 0) {
      document.querySelector('.nothing').classList.remove('d-none')
    } else {
      document.querySelector('.nothing').classList.add('d-none')
    }
    grades.forEach((e) => {
      this.renderGradeRow(e, this.deleteGrade, this.updateGrade)
    })
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  onUpdateClick(updateGrade) {
    this.updateGrade = updateGrade
  }

  renderGradeRow(data, deleteGrade, updateGrade) {
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
    var i2Btn = document.createElement('button')
    var i3 = document.createElement('i')

    td4.append(i1)
    td4.append(i2Btn)
    td4.append(i3)

    i1.classList.add('fas', 'fa-edit')
    i2Btn.classList.add('d-none', "btn", "btn-warning", "btn-sm")
    i2Btn.textContent = 'Update'
    i3.classList.add('fas', 'fa-trash-alt')

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    i3.addEventListener('click', function() {
      var result = confirm('relly???')
      if (result) {
        deleteGrade(data.id)
      }
    })

    i1.addEventListener('click', function(e) {
      var td = e.target.parentElement.parentElement.querySelectorAll('td')
      e.target.nextElementSibling.classList.remove("d-none")
      td[3].querySelectorAll('i')[0].classList.add('d-none')
      for (let i = 0; i < td.length-1; i++) {
        var input = document.createElement('input')
        input.classList.add('inputClass')
        var value = td[i].textContent;
        td[i].textContent = ""
        input.setAttribute('type', 'text')
        input.setAttribute('size', '7')
        input.setAttribute('value', value)
        td[i].prepend(input)
      }
    })

    i2Btn.addEventListener('click', update)
    function update (e) {
      var arr = Array.from(document.querySelectorAll('.inputClass'))
      var obj = {}
      for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i].value
      }
      updateGrade(data.id, obj[0], obj[1], obj[2])
    }

    tbody.appendChild(tr)

  }

}
