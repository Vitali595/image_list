import React from "react";
import style from "./Image.module.css";

type ImagePropsType = {
    id: number
    url: string
    setIdHandler: (id: number) => void
}

export const Image = React.memo(({id, url, setIdHandler}: ImagePropsType) => {
    const onClickHandler = () => {
        setIdHandler(id);
    };

    return (
        <div className={style.image} onClick={onClickHandler}>
            <img className={style.img} src={url} alt="some_image"/>
        </div>
    );
});