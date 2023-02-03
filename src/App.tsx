import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateNewPassword from './Components/CreateNewPassword/CreateNewPassword';
import Error404 from "./Components/Error/Error404";
import PasswordRecovery from './Components/PasswordRecovery/PasswordRecovery';
import Profile from './Components/Profile/Profile';
import Registration from "./Components/Registration/Registration";
import Test from './Components/Test/Test';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/Friday-project'} element={<Navigate to={"/Test"}/>}/>
                <Route path={'/Login'} element={<Login/>}/>
                <Route path={'/CreateNewPassword'} element={<CreateNewPassword/>}/>
                <Route path={'/PasswordRecovery'} element={<PasswordRecovery/>}/>
                <Route path={'/Profile'} element={<Profile/>}/>
                <Route path={'/Registration'} element={<Registration/>}/>
                <Route path={'/Test'} element={<Test/>}/>

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
