/**
 * Veiculo
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
    }, marca: {
      type: 'string',
      required: true
    }, placa: {
      type: 'string',
      required: true
    }, ano: {
      type: 'integer',
      required: true
    }, lugares: {
      type: 'integer',
      required: true
    },
      empresa: {
      model: 'empresa'
    }
  }

};
