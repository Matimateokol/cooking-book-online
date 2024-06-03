/* tslint:disable */
/* eslint-disable */
import { AbstractJsonSchemaPropertyObject } from './abstract-json-schema-property-object';
import { Item } from './item';
export interface JsonSchema {
  '$schema'?: string;
  definitions?: {
[key: string]: Item;
};
  description?: string;
  properties?: {
[key: string]: AbstractJsonSchemaPropertyObject;
};
  requiredProperties?: Array<string>;
  title?: string;
  type?: string;
}
