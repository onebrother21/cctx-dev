import { CommonUtils as Utils,DocEntity } from '@state';

export type UploadObj = DocEntity & {
  key:string;
  name:string;
  url:string;
  file:File;
};
export interface Upload extends UploadObj {}
export class Upload extends DocEntity {json(){return {...this};}}