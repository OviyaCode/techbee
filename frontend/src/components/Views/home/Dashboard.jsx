import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { BsFillPatchQuestionFill, BsFillBarChartFill } from 'react-icons/bs';
import NumberCounter from '../../NumberCounter';

function Dashboard() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <h3>Welcome to TechBee</h3>
            </div>
          </div>
        </div>

      </div>
      {/* Top cards */}
      <div className='row'>
        <div className='col-lg-3 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-1'>
                  <FaUsers />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter />
                    </div>
                    <div className='stat-heading'>Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-2'>
                  <MdCategory />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter />
                    </div>
                    <div className='stat-heading'>Quiz Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-3'>
                  <BsFillPatchQuestionFill />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter />
                    </div>
                    <div className='stat-heading'>Questions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-4'>
                  <BsFillBarChartFill />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter />
                    </div>
                    <div className='stat-heading'>Results recorded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* recently accessed */}
      <div className="row">
        <div className="col-sm-8">
          <section className="card" style={{height:"350px"}}>
            <div className="card-body text-secondary">
              <p>Recently Accessed</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, hic.</p>

            </div>
          </section>
        </div>
        <div className="col-sm-4">
          <section className="card" style={{height:"350px"}}>
            <div className="card-body text-secondary">
              <p>Notification</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, hic.</p>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
