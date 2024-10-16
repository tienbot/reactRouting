import './App.css'
import { useNavigate } from 'react-router-dom'
import { Button } from './components/Button/Button'

function App2() {
  const navigate = useNavigate()

  return (
    <>
      <Button onClick={() => navigate('/reactRouting')}/>
    </>
  )
}

export default App2
