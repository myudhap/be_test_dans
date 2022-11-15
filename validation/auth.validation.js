const Joi = require('joi');

module.exports = {
    register: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    }),
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}