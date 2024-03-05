// const express = require('express')
// const dotenv = require('dotenv')
import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"


dotenv.config()

// const app = express()
// const port = process.env.PORT
const app: Express = express()
const port = process.env.PORT || 4500

// app.get('/', (req, res) => {
//     res.send('Express + Typescript Server')
// })
app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server 00000000aaaaaaaa')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})