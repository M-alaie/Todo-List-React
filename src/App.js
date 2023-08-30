import React from 'react';
import Headers from './component/header';
import Badge from 'react-bootstrap/Badge';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <div className='App'>
    <Headers></Headers>
    <main>
          <section className='bg-light' >
            <div className="container d-flex flex-column align-items-center">
                <h1 >Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                <div className="form-inline">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control mx-sm-3" aria-label="input" placeholder="i want to do ..."/>
                    <button className="btn btn-primary ">add</button>
                  </div>
                </div>
            </div>
          </section>
          <div className="todosList mt-5">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <nav className="col-6 mb-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a href='l' className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <Badge bg='danger'>9</Badge></a>
                                <a href='k' className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <Badge bg='info'>9</Badge></a>
                            </div>
                        </nav>
                        <div className="col-6 mb-2">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    hello roocket
                                </div>
                                <div>
                                    <button type="button" className="btn btn-info btn-sm ms-2">edit</button>
                                    <button type="button" className="btn btn-danger btn-sm ms-2">delete</button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
              
                </div>
          </div>
        </main>
   </div>
  );
}

export default App;
