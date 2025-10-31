import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    { id: 1, name: "Sneha", age: 24, city: "Pune" },
    { id: 2, name: "Rahul", age: 27, city: "Mumbai" },
    { id: 3, name: "Aditi", age: 25, city: "Nagpur" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Person List</h2>
      {people.map((person) => (
        <div
          key={person.id}
          onClick={() => setSelectedPerson(person)}
          style={{
            cursor: "pointer",
            marginBottom: "8px",
            padding: "5px",
            backgroundColor:
              selectedPerson?.id === person.id ? "#d1f7c4" : "#f0f0f0",
            borderRadius: "5px",
            width: "200px",
          }}
        >
          {person.name}
        </div>
      ))}

      {selectedPerson && (
        <div style={{ marginTop: "20px" }}>
          <h3>Details:</h3>
          <p>
            <strong>Name:</strong> {selectedPerson.name}
          </p>
          <p>
            <strong>Age:</strong> {selectedPerson.age}
          </p>
          <p>
            <strong>City:</strong> {selectedPerson.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
