import React from 'react'
import ReactDOM from 'react-dom'
import GuessWho from './components/GuessWho.jsx'

window.onload = () => {
     ReactDOM.render(
          <GuessWho url='http://localhost:3000/zoombinis'/>,
          document.getElementById('app')
     )
}