/**
 * Configuracao
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	logo: {
      type: 'string',
      required: true
    },
	cor: {
      type: 'string',
      required: true
    },
	urlsmtp: {
      type: 'string',
      required: true
    },
	usersmtp: {
      type: 'string',
      required: true
    },
	portasmtp: {
      type: 'string',
      required: true
    },
	senhasmtp: {
      type: 'string',
      required: true
    },
      empresa: {
      model: 'empresa',
      required: true
    }
    
  }

};
