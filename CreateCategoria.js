
const db = require('./db')


//Cria a tabela no banco de dados
const Categoria = db.sequelize.define('tb_categoria', {
	idCategoria:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER
	},
	descricaoCategoria:{
		allowNull:false,
		type: db.Sequelize.STRING
	}
})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Categoria.sync({force: true})
