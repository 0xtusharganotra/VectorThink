export interface ContentType {
  _id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  visibility: string;
  createdAt: Date | string;
}

export interface MyContextType {
  createopen: boolean;
  setcreateopen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  email: string;
  contentarr: ContentType[];
  setContentarr: React.Dispatch<React.SetStateAction<ContentType[]>>;
  filtertype: string;
  setfiltertype: React.Dispatch<React.SetStateAction<string>>;
  shareopen: boolean;
  setshareopen: React.Dispatch<React.SetStateAction<boolean>>;
}
