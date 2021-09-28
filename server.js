const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: '06be4301e0694c2b87e31334686391d3',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('Html was monitored successfully!')
})

const port = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(port, () => console.log( `Hippity Hoppity your server is poppening on port: ${port}`))