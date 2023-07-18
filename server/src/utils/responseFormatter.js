const formatResponse = (status, data) => {
  return {
    message: "Success",
    status: status,
    data: data,
  };
};

const deleteFormatResponse = (status, message) => {
  return {
    message: message,
    status: status,
  }
}

const authFormatResponse = (status, username, token) => {
  return {
    message: "Success",
    status: status,
    username: username,
    token: token,
  };
};

module.exports = {
  formatResponse,
  deleteFormatResponse,
  authFormatResponse
};
