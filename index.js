const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('OK!')
})

app.listen(3000, () => {
  console.log('Listen to port 3000')
})
