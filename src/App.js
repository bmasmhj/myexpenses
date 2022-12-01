import './App.css';
import './Styles/style.css';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Pincode from './Pages/Pincode';
function App() {
  return (
    <>
     <Router>
      <>
        <div className='container-fluid mt-2'>
            <div className='row'>
                <Routes>
                  {/* 👇️ handle dynamic path */}
                  <Route path="/" element={<Pincode />}/>
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Pincode" element={<Pincode />} />
                  <Route path="/MainPage" element={<MainPage />} />


                  {/* 👇️ only match this when no other routes match */}
                  <Route
                    path="*"
                    element={
                      <Pincode />
                    }
                  />
                </Routes>          
            </div>
        </div> 
      </>
    </Router>
    </>
  );
}

export default App;
