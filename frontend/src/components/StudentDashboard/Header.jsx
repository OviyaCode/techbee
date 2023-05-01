/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/")
    }
  return (
    <header id="header" className="header">
    <div className="top-left">

        <div className="header-wrapper">
            <a className="brand-logo" href="/student-dashboard">TechBee</a>
            <a href='/student-dashboard/quiz' className="brand">Practice</a>
            <a href='/student-dashboard/results' className="brand">Results</a>
        </div>
    </div>
    <div className="top-right">
        <div className="header-menu">
            <div className="header-left">

                <div className="dropdown for-notification">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-bell"></i>
                        <span className="count bg-danger">3</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="notification">
                        <p className="red">You have 3 Notification</p>
                        <a className="dropdown-item media" href="#">
                            <i className="fa fa-check"></i>
                            <p>Server #1 overloaded.</p>
                        </a>
                        <a className="dropdown-item media" href="#">
                            <i className="fa fa-info"></i>
                            <p>Server #2 overloaded.</p>
                        </a>
                        <a className="dropdown-item media" href="#">
                            <i className="fa fa-warning"></i>
                            <p>Server #3 overloaded.</p>
                        </a>
                    </div>
                </div>

               
            </div>

            <div className="user-area dropdown float-right">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-user user'></i>
                </a>

                <div className="user-menu dropdown-menu">
                    <a className="nav-link" href="#"><i className="fa fa-user"></i>My Profile</a>

                    <a className="nav-link" href="#"><i className="fa fa-bell"></i>Notifications <span className="count">13</span></a>

                    {/* <a className="nav-link" href="#"></a> */}
                    <Link to="/student-dashboard/settings" className="nav-link"><i className="fa fa-cog"></i>Settings</Link>

                    <a className="nav-link" href="#" onClick={logout}><i className="fa fa-power-off"></i>Logout</a>
                </div>
            </div>

        </div>
    </div>
</header>
  )
}

export default Header