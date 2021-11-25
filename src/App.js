import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Container/Admin/Admin';
import AllPets from './Container/AllPets/AllPets';
import AppointmenPage from './Container/AppointmenPage/AppointmentPage';
import HomePage from './Container/HomePage/HomePage';
import LoginPage from './Container/LoginPage/LoginPage';
import LoginPets from './Container/LoginPets/LoginPets';
import Pet from './Container/Pet/Pet';
import RegisterUser from './Container/RegisterUser/RegisterUser';
import UserProfile from './Container/UserProfile/UserProfile';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/home"element={<HomePage />} />
          <Route path="/login"element={<LoginPage />} />
          <Route path="/register"element={<RegisterUser />} />
          <Route path="/profile"element={<UserProfile />} />
          <Route path="/appointment"element={<AppointmenPage />} />
          <Route path="/all"element={<AllPets />}/>
          <Route path="/pet"element={<Pet />}/>
          <Route path="/admin"element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
