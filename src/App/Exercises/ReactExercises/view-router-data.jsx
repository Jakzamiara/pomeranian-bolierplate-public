import { getParsedRouterDataList } from "../../router-data/parseRouterData";

import { SubRouteExampleMetaData } from "./SubRouteExample/router-data";
import { ReactOnClickRouterMetaData } from "./ReactOnClick/router-data";
import { MaterialUiMetaData } from "./MaterialUi/router-data";
import { UseEffectsRouterMetaData } from "./UseEffects/router-data";

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterMetaData,
  MaterialUiMetaData,
  UseEffectsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
