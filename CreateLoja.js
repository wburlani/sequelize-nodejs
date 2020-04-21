
const db = require('./db')


//Cria a tabela no banco de dados
const Loja = db.sequelize.define('tb_loja', {
	idLoja:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER
	},
	descricaoLoja:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		cnpjLoja:{
		allowNull:false,
		type: db.Sequelize.INTEGER
	},
		estadoLoja:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		cidadeLoja:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		bairroLoja:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		enderecoLoja:{
		allowNull:false,
		type: db.Sequelize.STRING
	},
		cepLoja:{
		allowNull:false,
		type: db.Sequelize.INTEGER
	},
		complementoLoja:{
		allowNull:false,
		type: db.Sequelize.TEXT
	},



})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Loja.sync({force: true})

