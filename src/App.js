import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Page from './page';
import Register from './register';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/protected" element={<Page/>}> </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;