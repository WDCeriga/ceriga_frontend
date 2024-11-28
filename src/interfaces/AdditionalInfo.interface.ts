export interface ICard { 
  type: "article" | "video"
  id: string;
  title: string;
  imgUrl: string;
  contentUrl: string;
}