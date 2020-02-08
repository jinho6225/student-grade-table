var table = document.querySelector('.table-striped')
var header = document.querySelector('header')
var form = document.querySelector('form')

var gForm = new GradeForm(form)
var pHeader = new PageHeader(header)
var gTable = new GradeTable(table)
var app = new App(gTable, pHeader, gForm)

app.start()
