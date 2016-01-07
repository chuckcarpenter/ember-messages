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
    // this formatting is fragile but there's no guarantee that a name field
    // is actually a normal name outside of an arbitrary usernam
    let name = this.get( 'username' );

    if ( /\d/.test( name ) ) {
      name = name.replace(/[0-9]/g, '');
    }

    name = name.split('.');

    return name = name.join(' ');
  }.property( 'username' )
});
