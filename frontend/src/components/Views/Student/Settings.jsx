import React,{useState} from 'react'

function Settings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: api call
    setPasswordUpdated(true);
  };

  return (
    <div className="update-password-container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" disabled={!passwordsMatch}>
            Update Password
          </button>
        </div>
        {passwordUpdated && <p className="success-message">Password updated successfully!</p>}
      </form>
    </div>
  );
}

export default React.memo(Settings)