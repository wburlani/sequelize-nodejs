const db = require('./db')

//Cria a tabela no banco de dados
const Cliente = db.sequelize.define('tb_Cliente', {
	idCliente:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER

	},
	descricaoCliente:{
		allowNull:false,
		type: db.Sequelize.STRING

	},
	cnpjCliente:{ 
		allowNull:false,
		type: db.Sequelize.INTEGER

	}



})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Cliente.sync({force: true})


