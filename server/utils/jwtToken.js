export const sendToken = (user, statuscode, res, message) => {
  const token = user.createJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(200).cookie("token", token, options).json({
    user,
    message,
    token,
  });
};
