const { Router } = require('express');

const {
  getAllUsersHandler,
  getAllPostsByIdHandler
} = require('./user.controller')

const router = Router();

//description schemas swagger
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User ID
 *        name:
 *          type: string
 *          description: The user name
 *        username:
 *          type: string
 *          description: An aliases
 *        email:
 *          type: string
 *          description: The user email
 *        address:
 *          type: object
 *          properties:
 *            street:
 *              type: string
 *              description: street address
 *            suite:
 *              type: string
 *              description: suite address
 *            city:
 *              type: string
 *              description: city
 *            zipcode:
 *              type: string
 *              description: zipcode
 *            geo:
 *              type: object
 *              properties:
 *                lat:
 *                  type: string
 *                  description: latitude
 *                lng:
 *                  type: string
 *                  description: longitude
 *        phone:
 *          type: string
 *          description: telephone number
 *        website:
 *          type: string
 *          description: user's website
 *        company:
 *          type: object
 *          description: user's company
 *          properties:
 *            name:
 *              type: string
 *              description: user company name
 *            catchPhrase:
 *              type: string
 *              description: Catch Phrase
 *            bs:
 *               type: string
 *               description: bs
 *    Posts:
 *      type: object
 *      properties:
 *        userId:
 *          type: integer
 *          description: user ID
 *        id:
 *          type: integer
 *          description: post ID
 *        title:
 *          type: string
 *          description: Post title
 *        body:
 *          type: string
 *          description: post content
 */

//description API Route /api/users Swagger
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: return all users
 *    tags: [users]
 *    responses:
 *      200:
 *        description: get all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      400:
 *        description: bad response
 */
router.get('/', getAllUsersHandler);

//description API Route /api/users/id Swagger
/**
 * @swagger
 * /api/users/{id} :
 *  get:
 *    summary: return all posts for an especified user
 *    tags: [posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: user ID
 *    responses:
 *      200:
 *        description: get all user's posts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Posts'
 *      400:
 *        description: bad response
 */
router.get('/:id', getAllPostsByIdHandler)

module.exports = router;
