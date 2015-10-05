/**
 * PesquisaSatisfacao
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	 pesquisa: {
      type: 'string',
      required: true
    },
      empresa: {
      model: 'empresa',
      required: true
    }
    
  }

};
