export type CCTXDevIcon = {
  label:string;
  type:string;
  text?:string;
  url?:string
};
export type CCTXDevMediaSessionMember = {name:string;};
export type CCTXDevMediaSession = {
  id:string;
  title:string;
  lastUpd:string|Date;
  members:CCTXDevMediaSessionMember[];
};
export type CCTXDevSessionRoom = {
  title:string;
  members:CCTXDevMediaSessionMember[];
  duration:string|Date;
  amt?:number;
  views?:number;
  comments?:number;
  img?:string|number;
};
export type CCTXDevMediaSessionComment = {user:string;body:string;};

