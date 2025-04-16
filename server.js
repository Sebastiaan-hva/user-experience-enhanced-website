console.log('Hier komt je server voor Sprint 10.')

console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')

console.log('yessir')

import express from 'express'

import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid();

app.engine('liquid', engine.express());

app.set('views', './views')

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}`)
})
