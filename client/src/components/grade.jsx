import React from 'react';

const Grade = (props) => {
  const { grade, deleteGrade, editing, currentUpdating, getOneByName } = props;
  return (
    <>
      <tr key={grade.id}>
        <td
        className="name"
        onClick={() => {
          getOneByName(grade.name)
        }}>
        {grade.name}
        </td>
        <td>{grade.course}</td>
        <td>{grade.grade}</td>
        <td>
          <i
            className="fas fa-edit operatorIcon"
            onClick={() => {
              editing(grade.id);
              currentUpdating(grade);
            }}
          ></i>
          <span>&#160;&#160;&#160;&#160;</span>
          <i
            className="fas fa-trash-alt operatorIcon"
            onClick={() => {
              deleteGrade(grade.id);
            }}
          ></i>
        </td>
      </tr>
    </>
  );
};

export default Grade;
