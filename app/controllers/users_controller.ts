import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    /**
     * Returns all users
     */
    async index({response} : HttpContext) {
        response
        .status(200)
        .json({
            message : 'All users',
            datas : []
        })
    }

    /**
     * Create a new user in the database
     */
    async add({response} : HttpContext) {
        response
        .status(201)
        .json({
            message : 'User created',      
        })
    }
}