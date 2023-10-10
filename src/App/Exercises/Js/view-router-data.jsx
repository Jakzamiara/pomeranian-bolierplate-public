import { getParsedRouterDataList } from "../../router-data/parseRouterData";

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from "./Exercise-js-variables-1/router-data";
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from "./Exercise-js-variables-2/router-data";
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from "./Exercise-js-functions/router-data";
import { BooleanRouterMetaData } from "./Boolean/router-data";
import { MathRouterMetaData } from "./Math/router-data";
import { JsNumbersTrainingRouterMetaData } from "./jsnumberstraining/router-data";
import { JsStringCodingRouterMetaData } from "./EmptyValuesAndComments/router-data";
import { FunctionTableRouterMetaData } from "./FunctionTable/router-data";
import { JsObjectsBasicsRouterMetaData } from "./JsObjectsBasics/router-data";
import { DataAndTimeRouterMetaData } from "./DataAndTime/router-data";
import { JsFunctionBasicsMetaData } from "./JsFunctionBasics/router-data";
import { SetTimeoutRouterMetaData } from "../SetTimeout/router-data";
import { animationsJSMetaData } from "./AnimationsJS/router-data";
import { HitTheMoleMetaData } from "./HitTheMole/router-data";
import { WhackAMoleRouterMetaData } from "./WhackAMole/router-data";
import { ClassesBasicsRouterMetaData } from "./ClassesBasics/router-data";
import { EncapsulationRouterMetaData } from "./Encapsulation/router-data";
import { OppRouterMetaData } from "./Opp/router-data";
import { PromisesRouterMetaData } from "./Promises/router-data";
import { AsyncRouterMetaData } from "./Async/router-data";
import { FetchRouterMetaData } from "./Fetch/router-data";

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  MathRouterMetaData,
  JsNumbersTrainingRouterMetaData,
  JsStringCodingRouterMetaData,
  FunctionTableRouterMetaData,
  JsObjectsBasicsRouterMetaData,
  DataAndTimeRouterMetaData,
  JsFunctionBasicsMetaData,
  SetTimeoutRouterMetaData,
  animationsJSMetaData,
  HitTheMoleMetaData,
  WhackAMoleRouterMetaData,
  ClassesBasicsRouterMetaData,
  EncapsulationRouterMetaData,
  OppRouterMetaData,
  PromisesRouterMetaData,
  AsyncRouterMetaData,
  FetchRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
