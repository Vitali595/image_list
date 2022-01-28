import React, {useEffect, useState} from "react";
import style from "./ImageList.module.css";
import {Image} from "./image/Image";
import {api, ImageType, ResCommentsType, ResCommentType} from "../api/api";
import {Modal} from "../modal/Modal";
import {ModalContent} from "./ModalContent/ModalContent";
import {randomNumber} from "../helpers/helpers";

export const ImageList = React.memo(() => {
    const [images, setImages] = useState<ImageType[]>([]);
    const [imageData, setImageData] = useState<ResCommentsType | null>(null);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        api.getImages()
            .then((res) => {
                setImages(res.data)
            })
            .catch(error => {
                throw new Error(error)
            })
    }, []);

    const getImages = (imageId: number) => {
        api.getImage(imageId)
            .then((res) => {
                setImageData(res.data)
            })
            .catch(error => {
                throw new Error(error)
            });

        setModal(true);
    };

    const sendData = (name: string, comment: string) => {
        api.addComment(imageData ? imageData.id : 0, {name, comment})
            .then((res) => {
                const newComment: ResCommentType = {
                    text: comment,
                    id: randomNumber(),
                    date: new Date().toString()
                };

                if (imageData) {
                    setImageData({
                        ...imageData,
                        comments: [...imageData.comments, newComment],
                    })
                }
            })
            .catch(error => {
                throw new Error(error)
            });
    };

    const onCloseModal = () => {
        setModal(false);
        setImageData(null);
    };

    return (
        <div className={style.imageList}>
            <div className={style.container}>
                {
                    images.map(({id, url}) => {
                        return <Image key={id} id={id} url={url} setIdHandler={getImages}/>
                    })
                }
                {
                    modal
                        ? <Modal
                            content={<ModalContent sendData={sendData} imageData={imageData}/>}
                            onClose={onCloseModal}/>
                        : null
                }
            </div>
        </div>
    );
});