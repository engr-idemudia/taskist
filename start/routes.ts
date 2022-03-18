/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.on('/').render('welcome')

  //using the url and inline handler
// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

  //using a controller
Route.get('/', 'PagesController.home')

  // other http verbs-CRUD operations
// Route.post() for Create operation
// Route.get() for Read operation
// Route.patch() for Update operation
// Route.delete() for Delete operation
// Route.put() for update/replace operation

  //defining static route
// Route.get('/contact', async () => {
//   return 'This is the contact page'
// })

  // using dynamic inline route handler
// Route.get('/about/:name?', async ({ params}) => {
//   return params.name ? `This is ${params.name}'s about page` : 'This is the normal about page'
// })

  //using a controller for the about and contact
// Route.get('/about/:name?', 'PagesController.about') //cleaner code

// Route.get('/about', 'PagesController.about') //static route
// Route.get('/contact', 'PagesController.contact')

// Route.get('/about-us', 'PagesController.about') //static route
// Route.get('/contact-us', 'PagesController.contact')
 
Route.get('/about/:name?', 'PagesController.about').as('about-osas')
Route.get('/contact', 'PagesController.contact').as('contact-myProf')
 


