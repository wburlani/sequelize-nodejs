const db = require('./db')

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

//Realiza o Insert Into no banco de dados
Categoria.create({
	descricaoCategoria:"PADRAO"
	
})