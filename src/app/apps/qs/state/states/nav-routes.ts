import { NavItem } from '@state';

export const mainNav:NavItem[] = [
  {link:"/qs/",label:"Home"},
  {link:"/qs/about",label:"what we do"},
  {label:"Pages",menu:[
    {link:"/qs/services",label:"Services"},
    {link:"/qs/team",class:"drop-text",label:"Team"},
    {link:"/qs/team-member",class:"drop-text",label:"Team Single"},
    {link:"/qs/gallery",class:"drop-text",label:"Gallery"},
    {link:"/qs/portfolio",class:"drop-text",label:"Portfolio"},
    {link:"/qs/single",class:"drop-text",label:"Single"},
    {link:"/qs/faq",class:"drop-text",label:"FAQ"},
    {link:"/qs/timeline",class:"drop-text",label:"Timeline"},
    {link:"/qs/not-found",class:"drop-text",label:"404"},
    {link:"/qs/coming",class:"drop-text",label:"Coming soon"},
    {link:"/qs/search",class:"drop-text",label:"Search results"},
    {link:"/qs/email",class:"drop-text",label:"Email Template"},
    {link:"/qs/queue",class:"drop-text",label:"Task Queue"},
    {link:"/qs/commissions",class:"drop-text",label:"Commissions"},
    {link:"/qs/inquiry",class:"drop-text",label:"Inquiry"}
  ]},
  {link:"#blog",label:"Blog",menu:[
    {link:"/qs/blog",class:"drop-text",label:"Blog"},
    {link:"/qs/blog-single",class:"drop-text",label:"Blog Details"}
  ]},
  {link:"#shop",label:"Shop",menu:[
    {link:"/qs/ecommerce",class:"drop-text",label:"Ecommerce"},
    {link:"/qs/ecommerce-single",class:"drop-text",label:"Ecommerce Single"},
    {link:"/qs/ecommerce-cart",class:"drop-text",label:"Ecommerce Cart"},
  ]},
  {link:"#account",label:"Account",menu:[
    {link:"/qs/signin",class:"drop-text",label:"Sign In"},
    {link:"/qs/signup",class:"drop-text",label:"Sign Up"},
    {link:"/qs/donate",class:"drop-text",label:"Donate"},
  ]},
  {link:"/qs/contact",label:"Contact Us"},
];