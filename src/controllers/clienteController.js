const clienteController = {
    home: (req, res) => {
        return res.render("painelCliente", { title: "Painel do cliente" })


    },

}

module.exports = clienteController;