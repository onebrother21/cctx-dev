import { NavItem } from '@state';

export const mainNav:NavItem[] = [
  {link:"/cctx/",label:"Home"},
  {link:"/cctx/about",label:"what we do"},
  {label:"Pages",menu:[
    {link:"/cctx/services",label:"Services"},
    {link:"/cctx/team",class:"drop-text",label:"Team"},
    {link:"/cctx/team-member",class:"drop-text",label:"Team Single"},
    {link:"/cctx/gallery",class:"drop-text",label:"Gallery"},
    {link:"/cctx/portfolio",class:"drop-text",label:"Portfolio"},
    {link:"/cctx/single",class:"drop-text",label:"Single"},
    {link:"/cctx/faq",class:"drop-text",label:"FAQ"},
    {link:"/cctx/timeline",class:"drop-text",label:"Timeline"},
    {link:"/cctx/not-found",class:"drop-text",label:"404"},
    {link:"/cctx/coming",class:"drop-text",label:"Coming soon"},
    {link:"/cctx/search",class:"drop-text",label:"Search results"},
    {link:"/cctx/email",class:"drop-text",label:"Email Template"},
    {link:"/cctx/queue",class:"drop-text",label:"Task Queue"},
    {link:"/cctx/commissions",class:"drop-text",label:"Commissions"},
    {link:"/cctx/inquiry",class:"drop-text",label:"Inquiry"}
  ]},
  {link:"#blog",label:"Blog",menu:[
    {link:"/cctx/blog",class:"drop-text",label:"Blog"},
    {link:"/cctx/blog-single",class:"drop-text",label:"Blog Details"}
  ]},
  {link:"#shop",label:"Shop",menu:[
    {link:"/cctx/ecommerce",class:"drop-text",label:"Ecommerce"},
    {link:"/cctx/ecommerce-single",class:"drop-text",label:"Ecommerce Single"},
    {link:"/cctx/ecommerce-cart",class:"drop-text",label:"Ecommerce Cart"},
  ]},
  {link:"#account",label:"Account",menu:[
    {link:"/cctx/signin",class:"drop-text",label:"Sign In"},
    {link:"/cctx/signup",class:"drop-text",label:"Sign Up"},
    {link:"/cctx/donate",class:"drop-text",label:"Donate"},
  ]},
  {link:"/cctx/contact",label:"Contact Us"},
];