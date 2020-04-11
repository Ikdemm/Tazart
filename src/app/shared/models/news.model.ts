export class News {
    //id: number;
    title: string;
    link: string;
    imageurl: string;
    date: Date;

    constructor(title: string, imageurl: string, link: string) {
        this.title = title;
        this.link = link;
        this.imageurl = imageurl;
    }
}