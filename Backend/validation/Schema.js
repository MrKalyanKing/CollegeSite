 import joi from "joi";
module.exports.listingSchema = joi.object({
    reportSchema: joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        hallticket: joi.number().required().min(10),
        gender: joi.string().required(),
        course: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().allow("", null)
    }).required()
});
