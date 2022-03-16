export type QS_Icon = {
  label:string;
  type:string;
  text?:string;
  url?:string
  class?:string;
};
export type QS_User = {name:string;};
export type QS_SessionMember = QS_User;
export type QS_Session = {
  id:string;
  name:string;
  members:QS_SessionMember[];
  duration:string|number;
  img?:string;
  created:string|Date;
  updated:string|Date;
};

export type QS_SessionComment = {user:string;body:string;};
export type QS_SessionRoom = Pick<QS_Session,"name"|"img"> & {
  rank?:number;
  views?:number;
  comments?:string[];
  users?:QS_User[];
  vid?:string;
};
export type QS_SessionRoomPreview =
Pick<QS_SessionRoom,"name"|"img"|"rank"|"vid"> &
Pick<QS_Session,"id"|"members"|"duration"> & {
  viewCt?:number;
  commentCt?:number;
  userCt?:number;
};
export type QS_Ad = {type:"ad",header:string;content:string;};