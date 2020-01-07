import { Author } from './author.model';

export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    description: string;
    authorId : number;
}