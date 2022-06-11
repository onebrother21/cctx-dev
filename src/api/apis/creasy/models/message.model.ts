import { CommonUtils as Utils,DocEntity } from '../../../common';
import { UserId } from './user.model';

export type MessageObj = DocEntity & Record<"body",string> & {user:UserId;};
export interface Message extends MessageObj {}
export class Message extends DocEntity {json(){return {...this};}}

export type MessageChainObj = DocEntity & {type:"user-chat"|"srv-chat";users:UserId[];msgs:Message[];};
export interface MessageChain extends MessageChainObj {}
export class MessageChain extends DocEntity {json(){return {...this,msgs:this.msgs.map(m => m.json())};}}