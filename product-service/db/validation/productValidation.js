import Schema from 'validate';

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export const productValidation = (product) => {
  const error = productSchema.validate(product);

  return error.length ? error : null;
};