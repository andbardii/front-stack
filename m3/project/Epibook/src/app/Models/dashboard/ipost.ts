export interface IPost {
  userId:string;
  body:string;
  image:string;
  category:string;
  likes:string[],
  comments:Comment[],
  author:string|undefined
  authorProPic:string|undefined
}
