/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthorsController from '#controllers/authors_controller'
import BooksController from '#controllers/books_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


// Version 1 API
router.group(() => {
  // Users routes
  router.group(() => {
    router.get('', [UsersController, 'index'])
    router.post('', [UsersController, 'add']) 
  })
  .prefix('users')

  // Books routes
  router.group(() => {
    router.get('', [BooksController, 'index'])
    router.post('', [BooksController, 'add']) 
  })
  .prefix('books')

  // Authors routes
  router.group(() => {
    router.get('', [AuthorsController, 'index'])
    router.post('', [AuthorsController, 'add']) 
  })
  .prefix('authors')
})
.prefix('api/v1')

