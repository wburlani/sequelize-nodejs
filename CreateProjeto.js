
const db = require('./db')


//Cria a tabela no banco de dados
const Projeto = db.sequelize.define('tb_projeto', {
	idProjeto:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER
	},
	descricaoProjeto:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		fkCliente:{
		allowNull: false,
     	type: db.Sequelize.INTEGER,
     	references:{ //referencia tabela Cliente
     		model: 'tb_Clientes',
     		key: 'idCliente'
     	}


	}


})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Projeto.sync({force: true})