import './App.css';
import React from 'react';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
