const Database = require('../utils/database')
const UsuarioController = require('../controllers/usuarioController');

const conexao = new Database();

class UsuarioModel {

    #usuId;
    #usuNome;
    #usuEmail;
    #usuAtivo;
    #usuSenha;
    #perId;

    get usuId() {
        return this.#usuId;
    }

    set usuId(usuId){
        this.#usuId = usuId;
    }

    get usuNome() {
        return this.#usuNome;
    }

    set usuNome(usuNome){
        this.#usuNome = usuNome;
    }

    get usuEmail() {
        return this.#usuEmail;
    }

    set usuEmail(usuEmail){
        this.#usuEmail = usuEmail;
    }

    get usuAtivo() {
        return this.#usuAtivo;
    }

    set usuAtivo(usuAtivo){
        this.#usuAtivo = usuAtivo;
    }

    get usuSenha() {
        return this.#usuSenha;
    }

    set usuSenha(usuSenha){
        this.#usuSenha = usuSenha;
    }

    get perId() {
        return this.#perId;
    }

    set perId(perId){
        this.#perId = perId;
    }

    constructor(usuId, usuNome, usuEmail, usuAtivo, usuSenha, perId){
        this.#usuId = usuId;
        this.#usuNome = usuNome;
        this.#usuEmail = usuEmail;
        this.#usuAtivo = usuAtivo;
        this.#usuSenha = usuSenha;
        this.#perId = perId;
    }

    async listarUsuarios() {
        let lista = [];

        let sql = "select * from tb_usuario"

        let rows = await conexao.ExecutaComando(sql)

        for(let i=0; i<rows.length; i++){
            let row = rows[i];
            
            let usuario = new UsuarioModel(row["usu_id"], row["usu_nome"], 
            row["usu_email"], row["usu_ativo"], row["usu_senha"], row["per_id"]);

            lista.push(usuario);
        }

        return lista;
    }
    async adcUsuarios(usu_nome, usu_email, usu_ativo, usu_senha, per_id) {
    
        let sql = "insert into tb_usuario(usu_nome,usu_email,usu_ativo,usu_senha,per_id) values (?,?,?,?,?)"

        let rows = await conexao.ExecutaComando(sql, [usu_nome, usu_email, usu_ativo, usu_senha, per_id])
        
    }
    async excUsuarios(id) {
    
        let sql = "delete from tb_usuario where usu_id = ?"

        let rows = await conexao.ExecutaComando(sql, [id])
        
    }
    async edtUsuarios(id, nome, email, ativo, senha, per_id) {
        let sql = "UPDATE tb_usuario SET usu_nome = ?, usu_email = ?, usu_ativo = ?, usu_senha = ?, per_id = ? WHERE usu_id = ?";
      
        let rows = await conexao.ExecutaComando(sql, [nome, email, ativo, senha, per_id, id]);
      }
      
    
}


module.exports = UsuarioModel;