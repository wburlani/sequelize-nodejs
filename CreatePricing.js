
const db = require('./db')


//Cria a tabela no banco de dados
const Pricing = db.sequelize.define('tb_pricing', {
	idPrincing:{
		allowNull:false,
        autoIncrement:true,
        primaryKey:true,
		type: db.Sequelize.INTEGER
	},
		precoVarejo:{
		allowNull:false,
		type: db.Sequelize.REAL
	},

		precoAtacado:{
		allowNull:false,
		type: db.Sequelize.REAL
	},
		precoAlternativo:{
		allowNull:false,
		type: db.Sequelize.REAL
	},

		statusRuptuta:{
		allowNull:false,
		type: db.Sequelize.BOOLEAN
	},


		dataValidade:{
		allowNull:false,
		type: db.Sequelize.DATE
	},
		dataColeta:{
		allowNull:false,
		type: db.Sequelize.DATE
	},
		ImagemPrincing:{
		allowNull:false,
		type: db.Sequelize.TEXT
	},





	/*Chave Extrageira*/

		fkItem: {
		allowNull: false,
		type: db.Sequelize.INTEGER,
		references: {  //referencia tabela Subgrupo
			model:'tb_items',
			key: 'idItem'
		}


	},

		fkProjeto: {
		allowNull: false,
		type: db.Sequelize.INTEGER,
		references: {  //referencia tabela Subgrupo
			model:'tb_Projetos',
			key: 'idProjeto'
		}


	},

		fkLoja: {
		allowNull: false,
		type: db.Sequelize.INTEGER,
		references: {  //referencia tabela Subgrupo
			model:'tb_Lojas',
			key: 'idLoja'
		}


	}



})
	
	/*Não executar o bloco .sync depois de criada a tabela, e inserido os dados!!!*/
		
	
Pricing.sync({force: true})

