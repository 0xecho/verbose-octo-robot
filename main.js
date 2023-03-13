const express = require('express');

const app = express();

app.use(
  (req, res, next) => {
    res.send(`Hello from Express! You requested ${req.url}. Here's the current time: ${new Date()}. AM_I_READING_ENV_VARIABLES: ${process.env.AM_I_READING_ENV_VARIABLES}`);
  }
)

app.listen(process.env.PORT || 80, () => {
  console.log('Server listening on port ' + process.env.PORT || 80);
  console.log(
    "Env:", JSON.stringify(
      process.env,
      null,
      2
    )
  )
})