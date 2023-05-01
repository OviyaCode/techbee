import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


function ResultRecord() {


  const data = [
    { id: 1, user: "Alice", submission: "sub_1", overallResult: "Pass", score: 80 },
    { id: 2, user: "Bob", submission: "sub_2", overallResult: "Fail", score: 0 },
    { id: 3, user: "Charlie", submission: "sub_2", overallResult: "Error", score: 0 },
    { id: 4, user: "David", submission: "sub_1", overallResult: "Pass", score: 90 },
    { id: 5, user: "Emma", submission: "sub_2", overallResult: "Fail", score: 0 },
  ];


  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "user", text: "User" },
    { dataField: "submission", text: "Submission" },
    { dataField: "overallResult", text: "Overall Result" },
    { dataField: "score", text: "Score" },

  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <strong className="card-title">Result List</strong>
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

export default ResultRecord;
