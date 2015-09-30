/**
 * Voo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	status: {    
        type: 'string',
        enum: ['Embarque', 'Desembarque'],
        defaultsTo: 'Embarque'
    },
  		tipo: {
      type: 'date',
      required: true
    }
    
  }

};
