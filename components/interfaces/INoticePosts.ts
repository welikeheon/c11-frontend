export interface INoticeContents {
    id: number;
    title: string;
    createdAt: string;
  };

export interface INoticePosts {
    posts: INoticeContents[]
}