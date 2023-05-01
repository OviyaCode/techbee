import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function QuizList() {

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

  const data = [{ id: 1, quizCategory: "Category A", title: "Question 1", description: "This is question 1", testcases: [{ input: "input", output: "input" }]},
  { id: 2, quizCategory: "Category B", title: "Question 2", description: "This is question 2", testcases: [{ input: "1", output: "1" }, { input: "1,2,4", output: "1" }] },
  { id: 3, quizCategory: "Category A", title: "Question 3", description: "This is question 3", testcases: [{ input: "2,3", output: "2" }] },
  { id: 4, quizCategory: "Category C", title: "Question 4", description: "This is question 4", testcases: [{ input: "input", output: "inp" }] },
  { id: 5, quizCategory: "Category B", title: "Question 5", description: "This is question 5", testcases: [{ input: "[a,e,f,c,i]", output: "[a,e,i]" }] }
  ];


  const renderTestCases = (cell, row) => {
    return (
      <div>
        {row.testcases.map(testcase => (
          <div key={testcase.input}>
            Input: {testcase.input}, Output: {testcase.output}
          </div>
        ))}
      </div>
    );
  };
  
  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "quizCategory", text: "Quiz Category" },
    { dataField: "title", text: "Title" },
    { dataField: "description", text: "Description" },
    { dataField: "testcases", text: "Test Cases", formatter: renderTestCases },
    {
      dataField: "action",
      text: "Action",
      formatter: renderActionIcons,
      headerStyle: { textAlign: "center" },
      align: "center"
    }
  ];
  


  const handleEdit = (row) => {
    // Navigate to the edit question page with the selected row's ID
    console.log(`Edit question with ID ${row.id}`);
    navigate(`/dashboard/questions/update/${row.id}`);
  };

  const handleDelete = (row) => {
    // Show a confirmation dialog and delete the selected row if confirmed
    if (window.confirm(`Are you sure you want to delete ${row.title}?`)) {
      console.log(`Delete question with ID ${row.id}`);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Question List</strong>
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

export default QuizList;