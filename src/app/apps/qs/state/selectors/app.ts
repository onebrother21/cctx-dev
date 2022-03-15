import {createFeatureSelector} from "@ngrx/store";
import {CCTXDevState} from "../states";

export const cctxdev$ = createFeatureSelector<CCTXDevState>("qs");