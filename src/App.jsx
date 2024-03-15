import { useState, useEffect } from 'react'
import AdviceDetail from './components/AdviceDetal'
import RefreshButton from './components/RefreshButton'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      const { id, advice } = response.data.slip;
      console.log(response.data.slip);
      setSlipId(id);
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
    <div className="advice-container">
     <AdviceDetail advice={advice} slipId={slipId} />
     </div>
     <RefreshButton onClick={handleRefreshClick} />
    </div>
  )
}

export default App
