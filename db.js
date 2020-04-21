const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'admin' /** SERVER, USER, PASSWORD **/, { 

	host:"localhost",
	dialect:'mariadb'
})


//Emiti mensagem de conexão com o banco de dados
sequelize.authenticate().then(function() {
	// body...
	console.log('Conectado com Sucesso!')
}).catch(function(erro) {
	// body...
	console.log('Falha na Conexão!'+erro)
})


	module.exports = {
		Sequelize: Sequelize,
		sequelize: sequelize

	}