import { Photo } from "../Interfaces/photo";

export class Cphoto implements Photo{
  albumId: number;
  id?: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(albumId: number, title: string, url: string, thumbnailUrl:string, id?: number) {
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }

}
