import React from 'react'

const Grade = (props) => {
  const { grade, deleteGrade } = props
  return (
    <>
      <tr key={grade.id}>
        <td>{grade.name}</td>
        <td>{grade.course}</td>
        <td>{grade.grade}</td>
        <td><button className="btn btn-danger" onClick={() => {
          deleteGrade(grade.id) }}>Delete</button></td>
      </tr>
    </>

  )
}

export default Grade;
