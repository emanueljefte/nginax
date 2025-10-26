import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import ScrollToHash from './components/ScrollToHash'

function App() {

  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
