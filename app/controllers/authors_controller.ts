// import type { HttpContext } from '@adonisjs/core/http'

export default class AuthorsController {
    /**
         * Returns all users
         */
    public async index() {
        return 'All authors'
    }

    /**
     * Create a new user in the database
     */
    public add() {
        return 'Author added'
    }
}