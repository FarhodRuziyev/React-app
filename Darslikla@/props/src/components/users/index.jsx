import StudentCard from "../userCard";
import "./style.scss";
export default function UsersList({ users }) {
  return (
    <div>
      <h1>All users</h1>
      <div className="allUsers">
        {users?.map((user) => (
          <StudentCard student={user} />
        ))}
      </div>
    </div>
  );
}
