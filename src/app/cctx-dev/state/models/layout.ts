import { NavItem,AppRoute } from "@state";

export type AppHeader = {
  menu:AppRoute[];
};
export type AppMobileNav = {
  open:boolean;
  menu:NavItem[];
};
export type AppFooter = {
  open:boolean;
  copy:string;
};
export type AppMainView = {
  open:boolean;
};
export type AppPagination = {
  current:number;
  total:number;
  next?:string;
  prev?:string;
};
export type AppLayout = {
  header:Partial<AppHeader>;
  mobileNav:Partial<AppMobileNav>;
  footer:Partial<AppFooter>;
  main:Partial<AppMainView>;
  pagination:Partial<AppPagination>;
};