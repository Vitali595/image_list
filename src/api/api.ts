import axios from "axios";

const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/',
});

export const api = {
    getImages() {
        return instance.get<ImageType[]>('images');
    },
    getImage(imageId: number) {
        return instance.get<ResCommentsType>(`images/${imageId}`);
    },
    addComment(imageId: number, comments: CommentType) {
        return instance.post(`images/${imageId}/comments`, comments);
    },
};

export type ResCommentType = {
    id: number
    text: string
    date: string
};

export type ResCommentsType = {
    id: number
    url: string
    comments: ResCommentType[]
};

export type CommentType = {
    name: string
    comment: string
};

export type ImageType = {
    id: number
    url: string
};