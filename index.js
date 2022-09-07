const app = require('./servidor');

app.listen(5000, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;
