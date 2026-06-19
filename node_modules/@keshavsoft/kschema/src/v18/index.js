// ---------- imports ----------
import { loadConfig, getConfig } from "../core/configStore.js";
import schemaMeta from "./schema/schema.json" with { type: "json" };

import { buildKSchema } from "./core/buildKSchema.js";

import { argsSchema } from "./core/getArgs.js";
import { descSchema } from "./core/getDesc.js";
import { exampleSchema } from "./core/getExample.js";

// ---------- types ----------
/**
 * @typedef {Object} KSchemaQuery
 * @property {() => any} findAll
 * @property {(id: any) => any} findByPk
 * @property {(id: any) => any} filterByPk
 * @property {(where: Record<string, any>) => any} filterByColumns
 * @property {{ count: () => any }} aggregate
 *
 * @typedef {Object} KSchemaMutate
 * @property {(record: Record<string, any>) => any} insertAsIs
 * @property {(record: Record<string, any>) => any} insertFlat
 * @property {(record: Record<string, any>) => any} insertGenPk
 * @property {(record: Record<string, any>) => any} insertWithChecks
 * @property {(pk: any) => any} deleteWithChecks
 * @property {(pk: any, record: Record<string, any>) => any} updateWithChecks
 *
 * @typedef {Object} KSchemaTable
 * @property {KSchemaQuery} query
 * @property {KSchemaMutate} mutate
 *
 * @typedef {Object} KSchema
 * @property {(config: Record<string, any>) => void} loadConfig
 * @property {() => Record<string, any>} getConfig
 * @property {(tableName: string) => KSchemaTable} table
 */

// ---------- middle ----------
const built = buildKSchema();

/** @type {KSchema} */
const kschema = {
    loadConfig,
    getConfig,
    table: (tableName) => built.table(tableName)
};

// ---------- exports ----------
export {
    kschema,
    schemaMeta,
    argsSchema,
    descSchema,
    exampleSchema
};