export type CCTXDevIcon = {
  label:string;
  type:string;
  text?:string;
  url?:string
};
export const ICONS:CCTXDevIcon[] = [
  {
    label:"Launch Session",
    text:"Already ready fye fye fye!",
    url:"/cctx/sessions/new",
    type:`code`,
  },{
    label:"Recent Sessions",
    text:"Creamy Crack, Project Anywhere...view more",
    url:"/cctx/sessions",
    type:`stack`,
  },{
    label:"Audioverse User Community",
    text:"See what's going on (eyeballs)...",
    url:"/cctx/audioverse",
    type:"users",
  },{
    label:"Account and Settings",
    text:"View or update my account details.",
    url:"/cctx/secure01",
    type:"lock",
  },{
    label:"Contact Us",
    text:"Our customer support is here for you.",
    url:"/cctx/contact",
    type:"updown",
  },
];