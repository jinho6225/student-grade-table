import React from 'react';
import Grade from './grade.jsx';

const GradeTable = props => {
  const { grades, deleteGrade, editing, currentUpdating } = props;
  return (
    <div className="col-12 order-2 col-md-8 order-md-1">
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => (
            <Grade
              key={grade.id}
              grade={grade}
              deleteGrade={deleteGrade}
              editing={editing}
              currentUpdating={currentUpdating}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
