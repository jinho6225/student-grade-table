var table = document.querySelector('.table-striped')
var formDiv = document.querySelector('.formDiv')
var form = document.querySelector('form')

var gForm = new GradeForm(form)
var pHeader = new PageHeader(formDiv)
var gTable = new GradeTable(table)
var app = new App(gTable, pHeader, gForm)
app.start()
