
const Students = (props) => {
  return ( 
    <>
      <ul>
        {props.students.map(student => 
        <>
          <li> {student.name} - {student.bio} </li>
          {student.scores.map(score =>  
            <li> on {score.date}: {student.name} scored {score.score} </li>)} 
        </>
        )}
      </ul>
    </>
  );
}

export default Students;