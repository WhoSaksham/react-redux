import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Shop from './components/Shop';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Shop />
      </Router>
    </>
  );
}

export default App;
