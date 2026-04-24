import './Students.css';
import StudentList from './StudentList.jsx';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const initialStudents = [
  { name: "Alice", id: 1, marks: 25 },
  { name: "Bob", id: 19 },
  { name: "Charlie", id: 2 },
];

function StudentDashboard({ onLogout }) {

  const [students, setStudents] = useState(initialStudents);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [marks, setMarks] = useState("");

  const nameChangeHandler = useCallback(e => setName(e.target.value), []);
  const idChangeHandler = useCallback(e => setId(e.target.value), []);
  const marksChangeHandler = useCallback(e => setMarks(e.target.value), []);

  const saveUser = useCallback(() => {
    //add a validation

    const newStudent = { name, id: Number(id), marks: Number(marks) };
    setStudents(prev => [...prev, newStudent]);
    // clear form
    setName("");
    setId("");
    setMarks("");
  }, [name, id, marks]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Hello</a>
          <Link to='/about' className="navbar-brand">About</Link>
          <form className="d-flex">
            <button className="btn btn-outline-success" onClick={onLogout}>Logout</button>
          </form>
        </div>
      </nav>

      <h3>Student dashboard</h3>

      <div className='mb-5'>

        <div className="form-group">
          <label>ID: </label>
          <input className="input-field" value={id} onChange={idChangeHandler} type="number" />
        </div>

        <div className="form-group">
          <label>Name: </label>
          <input className="input-field" value={name} onChange={nameChangeHandler} />
        </div>

        <div className="form-group">
          <label>Marks: </label>
          <input className="input-field" value={marks} onChange={marksChangeHandler} type="number" />
        </div>

        <button className="button" onClick={saveUser}>Save</button>
      </div>
      <div className="student-list">
        <h4>Total Students: {students.length}</h4>
        {students.map(s => <StudentList key={s.id} name={s.name} id={s.id} marks={s.marks || 0} />)}
      </div>
    </div>
  );
}

export default StudentDashboard;
