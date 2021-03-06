import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Links extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container">
  <Link to="/" className="navbar-brand" >React Simple Website</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">

        <Link to="/" className="nav-link" >Home</Link>

      </li>
      <li className="nav-item active">

        <Link to="./about" className="nav-link" >About</Link>

      </li>
      <li className="nav-item active">

        <Link to="./contact" className="nav-link" >Contact</Link>

      </li>
    </ul>

  </div>
  </div>
</nav>

    );
  }
}

export default Links
