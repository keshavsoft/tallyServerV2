import express from 'express';

import funcFromshowAll from './showAll/controller.js';
import funcFromfind from './find/controller.js';
import funcFrominsertGenPk from './insertGenPk/controller.js';
import funcFromdel from './del/controller.js';
import funcFromfilterQuery from './filterQuery/controller.js';

const tableName = "ItemsTable";
const tablePath = "Data/ItemsTable.json";
const configPath = "Config/Schemas/ItemsTable.json";

const router = express.Router();

router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));
router.get('/find/:pk', (req, res) => funcFromfind({ req, res, inTablePath: tablePath }));
router.post('/insertGenPk', express.json(), (req, res) => funcFrominsertGenPk({ req, res, inTablePath: tablePath, inConfigPath: configPath }));
router.delete('/del/:pk', (req, res) => funcFromdel({ req, res, inTablePath: tablePath }));
router.get('/filterQuery', (req, res) => funcFromfilterQuery({ req, res, inTablePath: tablePath }));

export { router };