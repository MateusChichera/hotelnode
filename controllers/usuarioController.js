const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {


    async listarView(req, res) {
        let usuario = new UsuarioModel();
        let listaUsuarios = await usuario.listarUsuarios();
        res.render('usuario/listar', {lista: listaUsuarios});
    }

    cadastrarView(req, res) {
        res.render('usuario/cadastrar');
    }
    editarView(req, res) {
        // Passe o ID do usuário para a página de edição como um parâmetro
        const userId = req.params.id;
        res.render('usuario/editar', { userId });
    }
    
    editar(req, res) {
        let adc = new UsuarioModel();
        if(req.body.id != ''  ) {
          const newuser={
                id: req.body.id,
                nome: req.body.nome,
                email:req.body.email,
                ativo:req.body.ativo,
                senha:req.body.senha,
                perfil: req.body.perfil
            }
   adc.edtUsuarios(newuser.id,newuser.nome, newuser.email, newuser.ativo, newuser.senha, newuser.perfil);
           
            res.send({ok: true, msg: "Usuário alterado"})
        }
        else{
            res.send({ok: false, msg: "Dados inválidos"})
        }
    }


    excluir(req, res) {
        const exc = new UsuarioModel();
        
        if(req.body.id != ""){
            exc.excUsuarios(req.body.id)

            res.send({ok: true, msg: "Usuário excluído!"})
        }
        else{
            res.send({ok: false, msg: "Dados inválidos!"})
        }
    }

    cadastrar(req, res) {
        let adc = new UsuarioModel();
        if(req.body.nome != ''  && req.body.email != '' && req.body.perfil != '0' && req.body.senha != "") {
          const newuser={
        
                nome: req.body.nome,
                email:req.body.email,
                ativo:req.body.ativo,
                senha:req.body.senha,
                perfil: req.body.perfil
            }
   adc.adcUsuarios(newuser.nome, newuser.email, newuser.ativo, newuser.senha, newuser.perfil);
           
            res.send({ok: true, msg: "Usuário adicionado"})
        }
        else{
            res.send({ok: false, msg: "Dados inválidos"})
        }
    }
}

module.exports = UsuarioController