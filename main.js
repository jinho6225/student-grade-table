var table = document.querySelector('.table-striped')
var header = document.querySelector('header')
var form = document.querySelector('form')
var pTag = document.querySelector('.d-none')

var gForm = new GradeForm(form)
var pHeader = new PageHeader(header)
var gTable = new GradeTable(table, pTag)
var app = new App(gTable, pHeader, gForm)

app.start()
