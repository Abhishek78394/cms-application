module.exports = {
    successResponseData(res, data, code = 200, message = 'Success', extras) {
      const response = {
        data,
        meta: {
          code,
          message,
        },
      };
      if (extras) {
        Object.assign(response, extras);
      }
      return res.json(response);
    },
  
    successResponseWithoutData(res, code = 200, message = 'Success') {
      const response = {
        status: true,
        message,
      };
      return res.status(code).json(response);
    },
  
    errorResponseWithoutData(res, code = 400, message = 'Error', req) {
      console.log(`ERROR [path = ${req.url}], [MESSAGE = ${message}], [CODE = ${code}]`);
      const response = {
        status: false,
        message,
      };
      return res.status(code).json(response);
    },
  
    errorResponseData(res, data, code = 400, message = 'Error', req) {
      console.log(`ERROR [path = ${req.url}], [MESSAGE = ${message}], [CODE = ${code}]`);
      const response = {
        status: false,
        message,
        data,
      };
      return res.status(code).json(response);
    },
  
    validationErrorResponseData(res, message, code = 400) {
      const response = {
        status: false,
        message,
      };
      return res.status(code).json(response);
    },
  
    apiError(err) {
      let error = {};
      if (err.name === 'ValidationError' && err.isJoi === true) {
        error.error_message = err.message.replace(/"/g, '');
        error.error_key = err.details[0].context.label;
      } else if (typeof err === 'string') {
        error.error_message = err;
      } else {
        error = err;
        if (error.status === 401) {
          error.message = 'Unauthorized';
        }
      }
      error.status = error.status || 400;
      return error;
    },
  };
  