import React, { useState } from 'react';

function CreateQuiz() {
  const [numTestCases, setNumTestCases] = useState(1);

  const handleNumTestCasesChange = (event) => {
    setNumTestCases(parseInt(event.target.value));
  };

  const renderTestCases = () => {
    const testCases = [];
    for (let i = 1; i <= numTestCases; i++) {
      testCases.push(
        <div key={i} className="row mb-3">
          <div className="col-md-3">
            <label htmlFor={`input${i}`} className="form-label">
              Input {i}:
            </label>
            <input type="text" className="form-control" id={`input${i}`} />
          </div>
          <div className="col-md-3">
            <label htmlFor={`output${i}`} className="form-label">
              Output {i}:
            </label>
            <input type="text" className="form-control" id={`output${i}`} />
          </div>
        </div>
      );
    }
    return testCases;
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <h3>Create Question</h3>
        <div className="card">
          <div className="card-header">
            <strong>New Question</strong>
          </div>
          <div className="card-body card-block">
            <div className="has-success form-group">
              <label htmlFor="inputIsValid" className="form-control-label">
                Quiz Category
              </label>
              <select className="form-select" aria-label="Default select role">
                <option defaultValue>Select the quiz category</option>
                <option value="student">Array</option>
                <option value="admin">Class</option>
                <option value="editor">String</option>
              </select>
            </div>
            <div className="has-success form-group">
              <label htmlFor="username" className="form-control-label">
                Title
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="has-success form-group">
              <label htmlFor="password" className="form-control-label">
                Description
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="has-success form-group">
              <label htmlFor="testcases" className="form-control-label">
                TestCases
              </label>
              <div className="form-group col-lg-4">
                <label htmlFor="numTestCases" className="form-control-label">
                  Number of Test Cases:
                </label>
                <input
                  type="number"
                  className="form-control col-sm-4"
                  id="numTestCases"
                  value={numTestCases}
                  onChange={handleNumTestCasesChange}
                  min="1"
                />
              </div>
              {renderTestCases()}
            </div>
            <div className="form-actions form-group">
              <button type="submit" className="btn btn-success btn-sm">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
