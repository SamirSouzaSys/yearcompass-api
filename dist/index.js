"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const dotenv = require('dotenv')
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const app = express()
// const port = process.env.PORT
const app = (0, express_1.default)();
const port = process.env.PORT || 4500;
// app.get('/', (req, res) => {
//     res.send('Express + Typescript Server')
// })
app.get('/', (req, res) => {
    res.send('Express + Typescript Server 00000000aaaaaaaa');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
