import React from "react";
import style from "./Footer.module.css";

export const Footer = React.memo(() => {
    return (
        <div className={style.footer}>
            <div className={style.line}/>
            <div className={style.content}>© 2022-2023</div>
        </div>
    );
});