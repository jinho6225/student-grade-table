import React from 'react';
import { Consumer } from '../store.jsx';

const Grade = (props) => {
  const {
    grade,
    deleteGrade,
    editing,
    currentUpdating,
    getOneByName,
    getOneByCourse,
  } = props;
  return (
    <>
      <tr key={grade.id}>
        <td
          className="name"
          onClick={() => {
            getOneByName(grade.name);
          }}
        >
          {grade.name}
        </td>
        <td
          className="course"
          onClick={() => {
            getOneByCourse(grade.course);
          }}
        >
          {grade.course}
        </td>
        <td>{grade.grade}</td>
        <Consumer>
          {({ isLogined }) => (
            <td>
              <i
                className="fas fa-edit operatorIcon"
                onClick={() => {
                  if (isLogined) {
                    editing(grade.id);
                    currentUpdating(grade);
                  }
                }}
              ></i>
              <span>&#160;&#160;&#160;&#160;</span>
              <i
                className="fas fa-trash-alt operatorIcon"
                onClick={() => {
                  if (isLogined) {
                    deleteGrade(grade.id);
                  }
                }}
              ></i>
            </td>
          )}
        </Consumer>
      </tr>
    </>
  );
};

export default Grade;
