import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png';
import search from './search.svg';
import user from './user.svg';

export default function Navbar(props) {
    console.log(logo);
    console.log(search);
    console.log(user);
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid mx-5 ">
    <a className="navbar-brand mx-5 " href="/"><img src={logo} alt="error" height={20} width={80} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-5 " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly">
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         {props.home}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">All</a></li>
            <li><a className="dropdown-item" href="/">Movies</a></li>
            <li><a className="dropdown-item" href="/">TV Series</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         {props.store}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">All</a></li>
            <li><a className="dropdown-item" href="/">Rent</a></li>
            <li><a className="dropdown-item" href="/">Channels</a></li>
          </ul>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/">Live TV</a>
        </li>
        <li className="nav-item dropdown mx-1">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <p className="d-inline-flex gap-1">
          <a className="navbar-brand mx-5" href="/"><img src={search} alt="error" height={20} width={20} /></a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
          </div>
      </div>
      <a className="navbar-brand mx-5 " href="/">Try for Free</a>
      <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           En
          </a>
          <ul className="dropdown-menu">
          <a href="/">Bahasa Indonesia</a>
          <li> <a href="/">Dansk</a> </li>
          <li> <a href="/">Deutsch</a> </li>
          <li> <a href="/">English</a> </li>
          <li> <a href="/">Espanol</a> </li>
          <li> <a href="/">Francais</a> </li>
          <li> <a href="/">Italiano</a> </li>
          <li> <a href="/">Nederlands</a> </li>
          <li><hr className="dropdown-divider"/></li>
          <li> <a href="/">Norsk</a> </li>
          <li> <a href="/">Polski</a> </li>
          <li> <a href="/">Portuhues</a> </li>
          <li> <a href="/">Suomi</a> </li>
          <li> <a href="/">Svenska</a> </li>
          <li> <a href="/">Italiano</a> </li>
          <li> <a href="/">Turkce</a> </li>
          <li> <a href="/">Pyccknn</a> </li>
          <li> <a href="/">हिन्दी</a> </li>
          </ul>
        </li>
        <a className="navbar-brand mx-3 " href="/"><img src={user} alt="error" height={20 } width={50} /></a>
    </ul> 
    </div>
  </div>
</nav>
</>
  )
}
Navbar.propTypes = {title: PropTypes.string,
                     store: PropTypes.string,
                     home: PropTypes.string
                    }
Navbar.defaultProps = { title: 'Prime Video',
                         store: 'Store',
                         home: 'Home'}




