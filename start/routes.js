'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: "Welcome to Uni-T v2 Server!", timestamp: Date.now(), version: "2.0.0" }
})


Route.get('/user/school', 'User/SchoolController.fetch')
Route.post('/user/login', 'User/UserController.login').validator('User/Login')
Route.post('/user/register', 'User/UserController.register').validator('User/Register')


Route.resource('admin/schools', 'Admin/SchoolController').apiOnly()
