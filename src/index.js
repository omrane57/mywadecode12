import React from 'react'
import ReactDOM from 'react-dom'
import FoodForm from './form'
import './style.css'

ReactDOM.render(<div>
 <nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<FoodForm />
</div>,document.getElementById('root'))