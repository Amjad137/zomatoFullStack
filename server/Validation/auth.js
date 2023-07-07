import joi from "joi";

export const validateSignup = (userData) => {
  const schema = joi.object({
    fullName: joi.string().required().min(4),
    email: joi.string().email(),
    password: joi.string().min(5),
    address: joi
      .array()
      .items(joi.object({ detail: joi.string(), for: joi.string() })),
    phoneNumber: joi.number(),
  });
  return schema.validateAsync(userData);
};

export const validateSignin = (userData) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).required(),
  });
  return schema.validateAsync(userData);
};
