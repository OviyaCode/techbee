import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function QuizCat() {

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
        { id: 1, title: "Category 1", description: "This is category 1" },
        { id: 2, title: "Category 2", description: "This is category 2" },
        { id: 3, title: "Category 3", description: "This is category 3" },
        { id: 4, title: "Category 4", description: "This is category 4" },
        { id: 5, title: "Category 5", description: "This is category 5" },
    ];

    const columns = [
        { dataField: "id", text: "ID" },
        { dataField: "title", text: "Title" },
        { dataField: "description", text: "Description" },
        {
            dataField: "action",
            text: "Action",
            formatter: renderActionIcons,
            headerStyle: { textAlign: "center" },
            align: "center"
        }
    ];

    const handleEdit = (row) => {
        // Navigate to the edit quiz category page with the selected row's ID
        console.log(`Edit quiz category with ID ${row.id}`);
        navigate(`/dashboard/quiz-cat/update/${row.id}`);
    };

    const handleDelete = (row) => {
        // Show a confirmation dialog and delete the selected row if confirmed
        if (window.confirm(`Are you sure you want to delete ${row.title}?`)) {
            console.log(`Delete quiz category with ID ${row.id}`);
        }
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title">Quiz Category List</strong>
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

export default QuizCat;
