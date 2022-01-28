import React from 'react';
import style from "./App.module.css";
import {ImageList} from "./image_list/ImageList";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className={style.app}>
            <div className={style.header}>Image list</div>
            <ImageList/>
            <Footer/>
        </div>
    );
}

export default App;
