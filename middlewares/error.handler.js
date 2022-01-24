const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function sequelizeErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    const { errors } = err;
    const outputPayload = {
      statusCode: 409,
      error: errors[0].type,
      message: errors[0].message,
    };
    res.status(409).json(outputPayload);
  }

  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler,
};
