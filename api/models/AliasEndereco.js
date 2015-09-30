/**
 * AliasEndereco
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	nome: {
      type: 'string',
      required: true
    },  
	endereco: {
      type: 'string',
      required: true
    },
	 bairro: {
      type: 'string',
      required: true
    },
	 estado: {
      model: 'estado',
      required: true
    },
     empresa: {
      model: 'empresa',
      required: true
    },
    status: {    
        type: 'string',
        enum: ['Ativo', 'Inativo'],
        defaultsTo: 'Ativo'
    }
  }

};
