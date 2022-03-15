import { AppEntity } from '@state';
export type User = AppEntity & Record<"username"|"email"|"fullname"|"img",string>;