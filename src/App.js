import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PetProfile from './Components/PetProfile/PetProfile';
import Admin from './Container/Admin/Admin';
import AdminAllAppointment from './Container/AdminAllAppointment/AdminAllAppointment';
import AdminAllDoctors from './Container/AdminAllDoctors/AdminAllDoctors';
import AdminAllPets from './Container/AdminAllPets/AdminAllPets';
import AdminAllUsers from './Container/AdminAllUsers/AdminAllUsers';
import AllPets from './Container/AllPets/AllPets';
import AppointmenPage from './Container/AppointmenPage/AppointmentPage';
import HomePage from './Container/HomePage/HomePage';
import LoginPage from './Container/LoginPage/LoginPage';
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
          <Route path="/petProfile"element={<PetProfile />}/>
          <Route path="/allpets"element={<AdminAllPets />}/>
          <Route path="/allappointments"element={<AdminAllAppointment />}/>
          <Route path="/allusers"element={<AdminAllUsers />}/>
          <Route path="/alldoctors"element={<AdminAllDoctors />}/>
          <Route path="/admin"element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
