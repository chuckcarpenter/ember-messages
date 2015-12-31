import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  date: DS.attr(),
  formattedDate: function() {
    const date = this.get( 'date' );

    return moment(date).format( 'ddd MMM D YYYY hh:mm:ss ZZ' );
  }.property( 'date' ),
  message: DS.attr(),
  pic: DS.attr(),
  useragent: DS.attr(),
  username: DS.attr(),
  formattedName: function() {
    let name = this.get( 'username' );
    name = name.split('.');

    return name = name.join(' ');
  }.property( 'username' )
});
