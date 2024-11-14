import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";
import CloseSquare from "./Icons/CloseSquare";

export enum CUSTOM_ICON_REF {
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  CloseSquare = 'CloseSquare'
}

export const IconRef: any = {
  [CUSTOM_ICON_REF.ArrowLeft]: ArrowLeft,
  [CUSTOM_ICON_REF.ArrowRight]: ArrowRight,
  [CUSTOM_ICON_REF.CloseSquare]: CloseSquare
}