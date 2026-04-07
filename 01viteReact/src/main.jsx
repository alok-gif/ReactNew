import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Welcome to My App</h1>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',  
//     },
//     children: 'Google'
//     };

const AnotherElement = (<h1>Hello, React!</h1>)

const anotherUser = ' Alok'

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  // AnotherElement
  reactElement
  // <App />
  
)
