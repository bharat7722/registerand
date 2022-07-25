import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}
