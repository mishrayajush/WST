import './Students.css';

function StudentList(props) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
  <td>{props.marks > 40 ? "Pass" : "Fail"}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default StudentList;