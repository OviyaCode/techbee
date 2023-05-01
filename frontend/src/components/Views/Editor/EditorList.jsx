import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function EditorList() {

  const navigate = useNavigate();
  const renderActionIcons = (cell, row) => {
    return (
      <div>


        <EditIcon
          key={`edit-${row.id}`}
          onClick={() => handleEdit(row)}
          style={{ cursor: "pointer", marginRight: "5px" }}
        />

        <DeleteIcon
          key={`delete-${row.id}`}
          onClick={() => handleDelete(row)}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };

  const data = [
    { id: 1, name: "John Doe", role: "editor" },
    { id: 2, name: "Jane Doe", role: "editor" },
    { id: 3, name: "Bob Smith", role: "editor" },
    { id: 4, name: "Alice Jones", role: "editor" },
    { id: 5, name: "Tom Lee", role: "editor" },
    { id: 6, name: "Samantha Lee", role: "editor" },
    { id: 7, name: "Michael Johnson", role: "editor" },
    { id: 8, name: "Lily Chen", role: "editor" },
    { id: 9, name: "David Kim", role: "editor" },
    { id: 10, name: "Emily Wang", role: "editor" }
  ];

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Name" },
    { dataField: "role", text: "Role" },
    {
      dataField: "action",
      text: "Action",
      formatter: renderActionIcons,
      headerStyle: { textAlign: "center" },
      align: "center"
    }
  ];

  const handleEdit = (row) => {
    // Navigate to the edit admin page with the selected row's ID
    console.log(`Edit admin with ID ${row.id}`);
    navigate(`/dashboard/admin/update/${row.id}`);
  };

  const handleDelete = (row) => {
    // Show a confirmation dialog and delete the selected row if confirmed
    if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
      console.log(`Delete admin with ID ${row.id}`);
    }
  };



  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title"> Editor List</strong>
          </div>
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            pagination={paginationFactory()}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorList;
