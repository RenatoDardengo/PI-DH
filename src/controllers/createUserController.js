const createUserController = {
    create: (req, res) => {
        return res.render("createUser", { title: "Editar usuário" })
    },

}


module.exports = createUserController;