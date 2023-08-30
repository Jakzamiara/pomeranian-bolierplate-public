import { getParsedRouterDataList } from "../../router-data/parseRouterData";
import { ColorsRouterMetaData } from "./Colors/router-data";
import { CssAnimationsRouterMetaData } from "./CssAnimations/router-data";
import { blockRouterMetaData as blockRouterMetaData121220231 } from "./Exercise-example-12-12-2023-1/router-data";
import { htmlCssRouterMetaData } from "./SelectorsAndCascade/router-data";
import { StandardTagsRouterMetaData } from "./StandartTags/router-data";
import { TextFundamentsRouterMetaData } from "./TextFundaments/router-data";

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  TextFundamentsRouterMetaData,
  StandardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
