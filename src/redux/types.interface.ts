export interface IPostParams {
  search: string;
  currentPage: number;
  order: 'asc' | 'desc';
  sortTitle: 'id' | 'body' | 'title'
}

export interface IPost {
  userId: string,
  id: string,
  title: string,
  body: string
}