import DataTable from "../../src/components/dataTable/DataTable";
import "./users.css";
const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>users</h1>
        <button>Add New Users</button>
        <DataTable />
      </div>
    </div>
  );
};

export default Users;
