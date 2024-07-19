import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../src/components/dataTable/DataTable";
import "./users.css";
import { userRows } from "../home/data";
const columns: GridColDef<(typeof userRows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "profilePicture",
    headerName: "Profile Picture",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "action",
    headerName: "Actions",
    width: 100,
    renderCell: () => {
      return (
        <div className="action">
          <div className="view">View</div>
          <div className="delete">Delete</div>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
