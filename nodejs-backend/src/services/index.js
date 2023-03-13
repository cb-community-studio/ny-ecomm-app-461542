const users = require("./users/users.service.js");
const product = require("./product/product.service.js");
const orders = require("./orders/orders.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(product);
  app.configure(orders);
  // ~cb-add-configure-service-name~
};
