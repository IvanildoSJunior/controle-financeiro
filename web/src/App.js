import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/Login" element={<Login />}></Route>
      
      </Routes>
    </Router>
  );
}

export default App;