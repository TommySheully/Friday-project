import React from 'react';
import SuperInputText from "../UniversalComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../UniversalComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../UniversalComponents/c3-SuperCheckbox/SuperCheckbox";
import s from "./Test.module.css";
import {NavLink} from "react-router-dom";

const routes = [
    {name: 'profile', to: '/profile'},
    {name: 'test', to: '/test'},
    {name: 'createNewPassword', to: '/createNewPassword'},
    {name: 'login', to: '/login'},
    {name: 'PasswordRecovery', to: '/PasswordRecovery'},
    {name: 'Registration', to: '/Registration'},
]

const Test = () => {

    return (
        <div>
            <div className={s.block}><h1>Test</h1></div>
            <div className={s.block}><SuperInputText/></div>
            <div className={s.block}><SuperButton>Test Button</SuperButton></div>
            <div className={s.block}><SuperCheckbox/></div>


            {routes.map(({name, to}) => {
                return <div><NavLink to={to}>{name}</NavLink></div>
            })}

        </div>
    );
};

export default Test;