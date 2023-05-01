import React from 'react';

function CreateAdmin() {
  return (
    <div className="row">
      <div class="col-lg-6">
      <h3>Create Admin</h3>
      
        <div class="card">
          <div class="card-header">
            <strong>New Admin</strong>
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
              <select className='form-select' aria-label='Default select role'>
                <option selected>Select the role</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            <div class="form-actions form-group">
              <button type="submit" class="btn btn-success btn-sm">Create</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
