/**
 * Solicitacao
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	dataHora: {
      type: 'date',
      required: true
    },  
    dataHoraRetorno: {
      type: 'date'
    },  
	  passageiros: {
      collection: 'user',
      required: true
    },
     origem: {
      model: 'aliasEndereco',
      required: true
    },
    destino: {
      model: 'aliasEndereco',
      required: true
    },
    centrocustos: {
      collection: 'centroCusto',
      required: true
    }, 
    itemfinanceiro: {
      model: 'itemFinanceiro',
      required: true
    }, 
    centraltransporte: {
      model: 'centralTransporte',
      required: true
    },
    
	 observacao: {
      type: 'string',
      required: true
    },
	  estado: {
      type: 'string'
    },
    empresa: {
      model: 'empresa',
      required: true
    },
    status: {    
        type: 'string',
        enum: ['Em Analise', 'Programado'],
        defaultsTo: 'Em Analise'
    }
    
  }

};
