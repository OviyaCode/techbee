import React from 'react';

function CreateEditor() {
  return (
    <div className="row">
      <div class="col-lg-6">
      <h3>Create Editor</h3>
      
        <div class="card">
          <div class="card-header">
            <strong>New Editor</strong>
          </div>
          <div class="card-body card-block">
            <div class="has-success form-group">
              <label for="username" class=" form-control-label">Username</label>
              <input type="text" class="form-control" />
            </div>
            <div class="has-success form-group">
              <label for="password" class=" form-control-label">Email</label>
              <input type="email" class="form-control" />
            </div>
            <div class="has-success form-group">
              <label for="inputIsValid" class=" form-control-label">Role</label>
              
            </div>
            <div class="form-actions form-group">
              <button type="submit" class="btn btn-success btn-sm">Create</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEditor;
