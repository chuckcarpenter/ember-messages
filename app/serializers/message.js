import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeArrayResponse: function( store, primaryModelClass, payload ) {
    var normalizedRecords = [];

    payload.data.map( function( record ) {
      var id = record.id;
      delete record.id;

      var normalizedRecord = {
        'type': primaryModelClass.modelName,
        'id': id,
        'attributes': record.attributes
      };

      normalizedRecords.push( normalizedRecord );
    });

    normalizedRecords = { data: normalizedRecords };
    return normalizedRecords;
   }
});
