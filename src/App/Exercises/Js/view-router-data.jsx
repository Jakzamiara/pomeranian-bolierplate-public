import { getParsedRouterDataList } from "../../router-data/parseRouterData";

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from "./Exercise-js-variables-1/router-data";
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from "./Exercise-js-variables-2/router-data";
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from "./Exercise-js-functions/router-data";
import { BooleanRouterMetaData } from "./Boolean/router-data";
import { MathRouterMetaData } from "./Math/router-data";
import { JsNumbersTrainingRouterMetaData } from "./jsnumberstraining/router-data";
import { JsStringCodingRouterMetaData } from "./EmptyValuesAndComments/router-data";
import { FunctionTableRouterMetaData } from "./FunctionTable/router-data";

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  MathRouterMetaData,
  JsNumbersTrainingRouterMetaData,
  JsStringCodingRouterMetaData,
  FunctionTableRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
