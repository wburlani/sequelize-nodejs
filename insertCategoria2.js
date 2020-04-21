
				//Rota de cadastro de Categoria
				app.get('/cadCategoria', function (req, res){
					res.render('')
				});

				//Adiconar os dados enviados pelo Categoria
				app.post('/addCategoria', function (req, res){
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
					}).then(function() {
						// body...
						res.send("Categoria criada com sucesso")
					}).catch(function(erro) {
						// body...
						res.send("Houve um erro" + erro)
					})
