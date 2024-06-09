class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.message === "CaseError") {
    const message = `Resource Not Found. Invalid ${err.path}!`;
    err = new ErrorHandler(message, 400);
  }
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Enterred!`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid Json Web Token. Try Again`;
    err = new ErrorHandler(message, 400);
  }
  if (err.message === "TokenExpiredError") {
    const message = `Invalid Json Web Token. Try Again`;
    err = new ErrorHandler(message, 400);
  }
  return res
    .status(err.statusCode)
    .json({ success: false, message: err.message });
};

export default ErrorHandler;
