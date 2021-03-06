/**
 * CentroCusto
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	codigo: {
      type: 'string',
      required: true
    },
  	nome: {
      type: 'string',
      required: true
    },
      empresa: {
      model: 'empresa',
      required: true
    }
    
  }

};
