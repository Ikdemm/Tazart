export class Contact {
    //id: number;
    platform: string;
    contact: string;
    link: string;

    constructor(platform: string, contact: string, link: string) {
        this.platform = platform;
        this.contact = contact;
        this.link = link;
    }
}