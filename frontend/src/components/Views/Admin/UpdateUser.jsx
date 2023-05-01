import React, { useState } from 'react';

function UpdateAdmin({ admin, onUpdate, onCancel }) {
    const [username, setUsername] = useState(admin?.username || '');
    const [email, setEmail] = useState(admin?.email || '');
    const [role, setRole] = useState(admin?.role || '');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedAdmin = {
        ...admin,
        username: username,
        email: email,
        role: role,
      };
      onUpdate(updatedAdmin);
    };
  
    return (
      <div className="row">
        <div class="col-lg-6">
          <h3>Update User</h3>
          <div class="card">
            <div class="card-header">
              <strong>User Details</strong>
            </div>
            <div class="card-body card-block">
              <form onSubmit={handleSubmit}>
                <div class="has-success form-group">
                  <label for="username" class="form-control-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="has-success form-group">
                  <label for="email" class="form-control-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="has-success form-group">
                  <label for="role" class="form-control-label">
                    Role
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                  </select>
                </div>
                <div class="form-actions form-group">
                  <button type="submit" class="btn btn-success btn-sm mr-2">
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default UpdateAdmin;
  
