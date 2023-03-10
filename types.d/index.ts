export type Category = {
    id: number;
    name: string,
};

export type Journey = {
    id: number;
    categoryId: number;
    name: string,
};

export type Paragraph = {
    id: number;
    text: string;
    imageUrl: string;
};

export type Article = {
    id: number;
    categoryId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    imageUrl: string;
    paragraphs: Paragraph[];
};