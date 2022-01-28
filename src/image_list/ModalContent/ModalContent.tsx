import React from "react";
import style from "./ModalContent.module.css";
import {ResCommentsType} from "../../api/api";
import {Form} from "../../form/Form";

type ModalContentPropsType = {
    sendData: (name: string, comment: string) => void
    imageData: ResCommentsType | null
};

export const ModalContent = React.memo(({sendData, imageData}: ModalContentPropsType) => {

    return (
        <div className={style.modalContent}>
            <div className={style.form}>
                {imageData && <img className={style.img} src={imageData.url} alt="selected_image"/>}
                <Form sendData={sendData}/>
            </div>
            <div className={style.comments}>
                {
                    imageData
                        ? imageData.comments.map(({date, text, id}) => {
                            return <div key={id} className={style.comment}>
                                <div className={style.data}>{new Date(date).toLocaleDateString()}</div>
                                <div className={style.text}>{text}</div>
                            </div>;
                        })
                        : null
                }
            </div>
        </div>
    );
});