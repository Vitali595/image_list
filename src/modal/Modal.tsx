import React, {ReactElement, useEffect} from "react";
import style from "./Modal.module.css";

type ModalPropsType = {
    content: ReactElement<any, any>
    onClose: () => void
}

export const Modal = ({content, onClose}: ModalPropsType) => {
    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case "Escape": {
                onClose();
                break;
            }
            default:
                return;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeydown);
        return () => document.removeEventListener("keydown", onKeydown);
    });

    return (
        <React.Fragment>
            <div className={style.modal} onClick={onClose}>
                <div className={style.modalDialog} onClick={e => e.stopPropagation()}>
                    <button className={style.button} onClick={onClose}>X</button>
                    {content && <div className={style.modalContent}>{content}</div>}
                </div>
            </div>
        </React.Fragment>
    );
};