const userController = {
    home:(req, res) => {
        return res.render("home", {title: "Bem Vindo", message: "Bem vindo ao Home"})


    },






}

module.exports = userController;