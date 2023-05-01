/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Menu } from '../../menu';
import { Link } from 'react-router-dom';



function Aside() {
    return (
        <>
            <aside id="left-panel" className="left-panel" >
                <nav className="navbar navbar-expand-sm navbar-default ">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {Menu.map((menu, index) => (
                                menu.fixMenu ? (
                                    <React.Fragment key={index}>
                                        <li className="active">
                                            <Link className='link' to={menu.path}>
                                              {menu.icon}  <span className="menu-items">{menu.name}</span>
                                            </Link>
                                        </li>
                                        <li className="menu-title">Menu</li>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment key={index}>
                                        <li className="menu-item-has-children dropdown">
                                            <a href='#' className="dropdown-toggle link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          {menu.icon} <span className="menu-items">{menu.name}</span> </a>
                                            <ul className="sub-menu children dropdown-menu">
                                                {menu.children.map((child, cIndex) => (
                                                    <li key={cIndex}>
                                                        <Link className='link' to={child.path}>{child.icon}<span className="menu-items">{child.name}</span></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </React.Fragment>
                                )
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export default Aside;
