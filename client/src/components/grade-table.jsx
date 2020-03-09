import React from 'react'
import Grade from './grade.jsx'

const GradeTable = (props) => {
  const { grades, deleteGrade } = props
  return (
    <div className="gradeTable col-8 col-11 order-1 col-lg-8 order-lg-1">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
        {grades.map((grade, i) => {
          return <Grade grade={grade} deleteGrade={deleteGrade} />
        })}
        </tbody>
      </table>
    </div>
  )
}

export default GradeTable;
