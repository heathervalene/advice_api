import { useState, useEffect } from 'react'
import AdviceDetail from './components/AdviceDetal'
import axios from 'axios'
import './App.css'

const App = () => {

  const[advice, setAdvice] = useState('')

  useEffect(() => {
   const getAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice')
    setAdvice(response.data.slip.advice)
   }
   getAdvice()
  }, [])
  

  return (
    <div>
     <AdviceDetail advice={advice} slip_id={1} />
    </div>
  )
}

export default App
