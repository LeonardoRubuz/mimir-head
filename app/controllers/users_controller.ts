// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    /**
     * Returns all users
     */
    public async index() {
        return 'All users'
    }

    /**
     * Create a new user in the database
     */
    public add() {
        return 'User created'
    }
}