import React from 'react';
import SuperInputText from "../UniversalComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../UniversalComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../UniversalComponents/c3-SuperCheckbox/SuperCheckbox";
import s from "./Test.module.css";

const Test = () => {
    return (
        <div>
            <div className={s.block}><h1>Test</h1></div>
            <div className={s.block}><SuperInputText/></div>
            <div className={s.block}><SuperButton>Test Button</SuperButton></div>
            <div className={s.block}><SuperCheckbox/></div>
        </div>
    );
};

export default Test;