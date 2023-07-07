import joi from "joi";

export const validateRestaurantCity = (restaurantObj) => {
  const schema = joi.object({
    city: joi.string().required(),
  });
  return schema.validateAsync(restaurantObj);
};

export const validateRestaurantSearchString = (restaurantObj) => {
  const schema = joi.object({
    searchString: joi.string().required(),
  });
  return schema.validateAsync(restaurantObj);
};
