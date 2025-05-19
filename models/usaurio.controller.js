import usuario from "../models/.model.js"


class usuariocontroller{
    async store(req, res){
    const {nome, email, senha} = req.body;
    try{
        const usuario = await usuario.create({nome, email, senha})
        return res.status(201).json(usuario)
    } catch(error){
        return res.status(500).json({error: 'erro ao criar usuario'})
    }
    






}
}