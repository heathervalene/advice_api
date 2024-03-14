import { useState, useEffect } from 'react'
import AdviceDetail from './components/AdviceDetal'
import RefreshButton from './components/RefreshButton'
import axios from 'axios'
import './App.css'

const App = () => {

  const[advice, setAdvice] = useState('')
  const[slipId, setSlipId] = useState('')

  useEffect(() => {
    fetchAdvice();
  }, []); 

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const { slip_id, advice } = response.data.slip;
      setSlipId(slip_id);
      setAdvice(advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  const handleRefreshClick = () => {
    fetchAdvice();
  };
  

  return (
    <div>
     <AdviceDetail advice={advice} slipId={slipId} />
     <RefreshButton onClick={handleRefreshClick} />
    </div>
  )
}

export default App
