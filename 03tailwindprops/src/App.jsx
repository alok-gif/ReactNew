import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4'>Tailwind test</h1>
      <Card username="John Doe"/>
      <Card username="Jane Smith"/>
      <Card/>
    </>
  )
}

export default App
