import { getParsedRouterDataList } from "../../router-data/parseRouterData";
import { ColorsRouterMetaData } from "./Colors/router-data";
import { CssAnimationsRouterMetaData } from "./CssAnimations/router-data";
import { blockRouterMetaData as blockRouterMetaData121220231 } from "./Exercise-example-12-12-2023-1/router-data";
import { ImageFilesRouterMetaData } from "./ImageFiles/router-data";
import { htmlCssRouterMetaData } from "./SelectorsAndCascade/router-data";
import { StandardTagsRouterMetaData } from "./StandartTags/router-data";
import { TextFundamentsRouterMetaData } from "./TextFundaments/router-data";
import { BackgroundsRouterMetaData } from "./Backgrounds/router-data";
import { MediaFilesRouterMetaData } from "./MediaFiles/router-data";
import { BoxModelRouterMetaData } from "./BoxModel/router-data";
import { TableRouterMetaData } from "./Table/router-data";
import { TableTennisRouterMetaData } from "./TableTennis/router-data";
import { ArrayRenderingRouterMetaData } from "./ArrayRendering/router-data";
import { ArrayRenderToTableRouterMetaData } from "./ArrayRenderToTable/router-data";

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  TextFundamentsRouterMetaData,
  StandardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  BackgroundsRouterMetaData,
  MediaFilesRouterMetaData,
  BoxModelRouterMetaData,
  TableRouterMetaData,
  TableTennisRouterMetaData,
  ArrayRenderingRouterMetaData,
  ArrayRenderToTableRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
