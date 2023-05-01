import React from 'react';
import { useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path !== '');
  const isDashboardPage = location.pathname === '/dashboard';

  if (isDashboardPage) {
    return null; // Don't render the breadcrumbs on the dashboard page
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='breadcrumbs'>
      <div className='breadcrumbs-inner'>
        <div className='row m-0'>
          <div className='page-header float-right'>
            <div className='page-title'>
              <ol className='breadcrumb text-right'>
                {paths.map((path, index) => (
                  <li key={index}>
                    <a href={`/${paths.slice(0, index + 1).join('/')}`}>
                      {capitalize(path)}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
