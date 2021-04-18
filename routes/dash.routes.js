const { Router } = require("express");
const { auth } = require("../util/middleware/auth");
const router = Router();



// re.userq
router.get("/perfil", auth, (req, res) => {

  res.render('perfil', {
    user: req.user,
    bot: req.BotClient,

  });
});


router.get("/perfil/datos", auth, (req, res) => {
  res.render('datos', {
    user: req.user,
  });
});


router.get("/perfil/servidores/", auth, (req, res) => {
  res.render("servidores", {
    user: req.user,
    bot: req.BotClient,
  });
});

router.get("/perfil/servidores/:id", auth, (req, res) => {
  let id = req.params.id;
  let servidor = req.BotClient.guilds.cache.get(id);
  let canales = servidor.channels.cache;

  res.render("servidores", {
    user: req.user,
    servidor,
    canales,
  });
});




 

module.exports = router;
