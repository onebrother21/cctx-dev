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
  collaborators:CCTXDevMediaSessionMember[];
};

export type CCTXDevMediaSessionComment = {user:string;body:string;};