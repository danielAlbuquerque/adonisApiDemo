'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')
