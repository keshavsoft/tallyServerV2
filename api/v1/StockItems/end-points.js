import express from 'express';

import funcFromshowAll from './showAll/controller.js';
import funcFrominsertGenPk from './insertGenPk/controller.js';
import funcFromfind from './find/controller.js';
import funcFromdel from './del/controller.js';
import funcFromfilter from './filter/controller.js';

const tableName = "StockItems";
const tablePath = "Data/StockItems.json";
const configPath = "Config/Schemas/StockItems.json";

const router = express.Router();

router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));
router.post('/insertGenPk', express.json(), (req, res) => funcFrominsertGenPk({ req, res, inTablePath: tablePath, inConfigPath: configPath }));
router.delete('/find/:pk', (req, res) => funcFromfind({ req, res, inTablePath: tablePath }));
router.delete('/del/:pk', (req, res) => funcFromdel({ req, res, inTablePath: tablePath }));
router.post('/filter', express.json(), (req, res) => funcFromfilter({ req, res, inTablePath: tablePath, inConfigPath: configPath }));

export { router };