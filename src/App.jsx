import { Fragment, useState } from "react"

// export default function App() {
//   const [data, setData] = useState(
//     {
//       name: "Alex",
//       address: {
//         city: "Krakow",
//         country: "Poland",
//         zip: "30-001"
//       }
//     }
//   )

//   function changeCity() {
//     setData((prevData) => ({...prevData, address: { ...prevData.address, city: 'Lviv' }}));
//   }

//   function changeZip() {
//     setData((prevData) => ({...prevData, address: { ...prevData.address, zip: '67-145' }}));
//   }

//   return (
//     <Fragment>
//       <p>Name: {data.name}</p>
//       <p>City: {data.address.city}</p>
//       <button onClick={changeCity}>Change city</button>
//       <p>Country: {data.address.country}</p>
//       <p>Zip: {data.address.zip}</p>
//       <button onClick={changeZip}>Change zip</button>
//     </Fragment>
//   )
// }


export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alex", grade: 8 },
    { id: 2, name: "Anna", grade: 11 },
    { id: 3, name: "Max", grade: 6 }
  ])

  function incGrade(studentId) {
    setStudents((prevStudents) => 
      prevStudents.map((student) => student.id === studentId ? {...student, grade: Math.min(student.grade + 1, 12)} : student))
  }

  function decGrade(studentId) {
    setStudents((prevStudents) => 
      prevStudents.map((student) => student.id === studentId ? {...student, grade: Math.max(student.grade - 1, 0)} : student))
  }

  function calcAvgGrade() {
    return students.reduce((acc, sum) => acc + sum.grade, 0) / students.length;
  }

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Grade: {student.grade}</p>
          <button onClick={() => incGrade(student.id)}>Increment grade</button>
          <button onClick={() => decGrade(student.id)}>Decrement grade</button>
        </div>
      ))}
      <p>Total students' grade: {calcAvgGrade()}</p>
    </>
  )
}