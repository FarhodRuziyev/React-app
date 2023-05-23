import "./style.scss";

export default function StudentCard({ student }) {
  return (
    <div className="card">
      <h1>Name: {student?.name}</h1>
      <h5>Age: {student?.age}</h5>
      {student?.isStudent ? <p>student</p> : <p>student</p>}
    </div>
  );
}
