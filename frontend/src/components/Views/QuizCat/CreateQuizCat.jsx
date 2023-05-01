import React from 'react';

function CreateQuizCat() {
  
  return (
    <div className="row">
      <div class="col-lg-6">
        <h3>Create Quiz Category</h3>
        <div class="card">
          <div class="card-header">
            <strong>New Category</strong>
          </div>
          <div class="card-body card-block">
            <form>
              <div class="has-success form-group">
                <label for="title" class=" form-control-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"                />
              </div>
              <div class="has-success form-group">
                <label for="description" class=" form-control-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  ></textarea>
              </div>
              <div class="form-actions form-group">
                <button type="submit" class="btn btn-success btn-sm">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuizCat;
