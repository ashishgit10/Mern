import ValidationError from "joi";

const errorHandler = (error, req, res, next) => {
  //default error
  console.log(error)
  let status = 500;
  let data = {
    message: `Internal Server Error`
  };
  if (error instanceof ValidationError) {
    status=422;
        data.message = error.message;

    return res.status(status).json(data);
  }
  if (error.status) {
    status = error.status;
  }
  if (error.message) {
    data.message = error.message;
  }
  return res.status(status).json(data);
};

export default errorHandler;
