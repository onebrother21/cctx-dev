import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class MockBackendLogger {
  colors = {
    log:"cyan",
    warn:"yellow",
    info:"blue",
    error:"red",
    trace:"purple",
    ok:"lime-green"
  };
  reset = "\x1b[39m";
  toConsole = (c:string,...a:any[]) => {
    const color = this.colors[c as keyof typeof this.colors];
    const error = console.error.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const warn = console.warn.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const trace = console.trace.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    const log = console.log.bind(console,"%c "+c.toLocaleUpperCase(),"color:"+color);
    switch(c){
      case "error":error(...a);break;
      case "warn":warn(...a);break;
      case "trace":trace(...a);break;
      default:log(...a);break;
    }
    return true;
  };
  log = this.toConsole.bind(null,"log");
  info = this.toConsole.bind(null,"info");
  warn = this.toConsole.bind(null,"warn");
  error = this.toConsole.bind(null,"error");
  trace = this.toConsole.bind(null,"trace");
  traceErr = this.toConsole.bind(null,"error");
  ok = this.toConsole.bind(null,"ok");
  clear = () => console.clear();
}