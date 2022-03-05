import './App.css'
import Nav from './Nav'
import Shop from './Shop'
import About from './About'
// import react router dom
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>
    </Router>
  )
}
 
export default App
