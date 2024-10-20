export const errorHandler = (Statuscode, Message) => {
  const error = new Error();
  error.Statuscode = Statuscode;
  error.message = message;
  return error;
};

//created cutom error
