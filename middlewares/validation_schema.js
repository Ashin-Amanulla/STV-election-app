const Joi = require('joi')

//Joi autherization schema
//Fields - name, email, password, type[student, ro, admin], candidate, candidateDetails
const candidateJoi = Joi.object({
    name: Joi.string()
        .required(),

    image: Joi.string(),

    department: Joi.string()
})

module.exports = { candidateJoi}