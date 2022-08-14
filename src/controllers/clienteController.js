const clienteController = {
    home: (req, res) => {
        return res.render("datauser", { title: "Painel do cliente" })


    },

}

module.exports = clienteController;