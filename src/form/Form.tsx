import React, {FormEvent, useState} from "react";
import style from "./Form.module.css";

type FormPropsType = {
    sendData: (name: string, comment: string) => void
};

export const Form = React.memo(({sendData}: FormPropsType) => {
    const [error, setError] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {
            name, comment
        }: { [k: string]: FormDataEntryValue } = Object.fromEntries(new FormData(e.currentTarget).entries());

        if (name.toString().trim() !== '' && comment.toString().trim() !== '') {
            sendData(name.toString(), comment.toString());
            setError(false);
            //@ts-ignore
            document.form.reset();
        } else {
            setError(true);
        }
    };

    return (
        <form id="form" name="form" onSubmit={onSubmit} className={style.form}>
            <div className={style.fields}>
                <div className={style.error} style={{opacity: error ? 1 : 0}}>
                    <label className={style.errorText}>Все поля обязательны!</label>
                </div>
                <div className={style.field}>
                    <input
                        id="name"
                        name="name"
                        className={style.input}
                        placeholder="Ваше имя"
                    />
                </div>
                <div className={style.field}>
                    <input
                        id="comment"
                        name="comment"
                        className={style.input}
                        placeholder="Ваш комментарий"
                    />
                </div>
                <button className={style.button}>Оставить комментарий</button>
            </div>
        </form>
    );
});