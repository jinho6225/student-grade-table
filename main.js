var table = document.querySelector('.table-striped')
var header = document.querySelector('header')

var pHeader = new PageHeader(header)
var gTable = new GradeTable(table)
var app = new App(gTable, pHeader)

app.start()
