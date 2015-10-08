/**
 * Motorista
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
	  nome: {
      type: 'string',
      required: true
    },
    telefone: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    vehicle: {
      model: 'veiculo',
      required: true
    },
    empresa: {
      model: 'empresa',
      required: true
    }
    
  }

};
