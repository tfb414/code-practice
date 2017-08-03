const express = require('express')
const { resolve } = require('path')

// const DIST = resolve(__dirname, '../dist')
// const HTML = resolve(__dirname, '../dist/index.html')

const app = express()

app.set('port', (process.env.PORT || 3000))

app.use(express.static(resolve(DIST)))

app.get('*', (req, res) => {
  res.sendFile(resolve(HTML))
})

app.listen(app.get('port'), () => {
  console.log(`
  ✅  Express server started...
  💻  Running on port ${app.get('port')}`)
})