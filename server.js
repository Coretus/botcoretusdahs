const app = require("./server/express");
require("./index");

app.listen(app.get("port"), () => {
  console.log("Pagina prendidoa");
});
