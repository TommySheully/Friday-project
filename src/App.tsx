import React from 'react';
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
                <Route path={'/'} element={<Test/>}/>
                <Route path={'/friday-project'} element={<Navigate to={"/Test"}/>}/>

                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/createNewPassword'} element={<CreateNewPassword/>}/>
                <Route path={'/passwordRecovery'} element={<PasswordRecovery/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/test'} element={<Test/>}/>

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
