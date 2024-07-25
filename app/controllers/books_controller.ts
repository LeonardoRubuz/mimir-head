// import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
    /**
     * Returns all users
     */
    public async index() {
        return 'All books'
    }

    /**
     * Create a new user in the database
     */
    public add() {
        return 'Book added'
    }
}