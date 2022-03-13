import {createFeatureSelector} from "@ngrx/store";
import {CCTXDevState} from "../states";

export const cctxdev$ = createFeatureSelector<CCTXDevState>("cctx-dev");