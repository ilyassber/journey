export type Journey = {
    id: number;
    name: string,
};

export type Paragraph = {
    id: number;
    text: string;
    imageUrl: string;
};

export type Article = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    imageUrl: string;
    paragraphs: Paragraph[];
};