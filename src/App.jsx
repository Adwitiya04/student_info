import React, { useState } from 'react';

const StudentDetails = (props) => {
  const { name, age, onBack } = props;

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};


const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Alice', age: 22 },
    { id: 3, name: 'Bob', age: 19 }
  ];

  
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      {selectedStudent ? (
        <StudentDetails
          name={selectedStudent.name}
          age={selectedStudent.age}
          onBack={handleBack}
        />
      ) : (
        <div id='yo'>
          <h1>Student List</h1>
          <ul>
            {students.map((student) => (
              <li key={student.id} onClick={() => handleStudentClick(student)}>
                {student.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const App = () => {
  return (
    <div>
      <StudentList />
    </div>
  );
};

export default App;
