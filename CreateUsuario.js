
const db = require('./db')


//Cria a tabela no banco de dados
const Usuario = db.sequelize.define('usuarios', {
	id:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER
	},
	nome:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		nome:{
		allowNull:false,
		type: db.Sequelize.STRING
	}




})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Usuario.sync({force: true})
