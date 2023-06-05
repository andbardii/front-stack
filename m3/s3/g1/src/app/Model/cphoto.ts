import { Photo } from "../Interfaces/photo";

export class Cphoto implements Photo{
  albumId: number;
  id?: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  liked:boolean;

  constructor(albumId: number, title: string, url: string, thumbnailUrl:string,liked:boolean, id?: number) {
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
    this.liked = liked;
  }

}
