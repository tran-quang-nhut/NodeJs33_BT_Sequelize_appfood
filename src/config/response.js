//200c
const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

const failCode = (res, message) => {
  res.status(400).json({
    message,
  });
};

const errorCode = (res, data, message) => {
  res.status(500).json({
    message,
  });
};
export { successCode, failCode, errorCode };
