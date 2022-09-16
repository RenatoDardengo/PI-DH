const clienteController = {
    home: (req, res) => {
        return res.render("createuser", { title: "Painel do cliente" })


    },

}

module.exports = clienteController;