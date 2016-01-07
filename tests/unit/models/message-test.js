import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message', 'Unit | Model | message', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let message = this.subject();
  // let store = this.store();
  assert.ok(!!message);
});

// custom date formatter from returned data to readable format from GMT
test('should format the date correctly', function(assert) {
  let message = this.subject({ date: '2015-10-11T08:40:51.620Z'});

  assert.equal(message.get('formattedDate'), 'Sun Oct 11 2015 01:40:51 -0700');
});

// taking username and transforming to display name
test('should format username', function(assert) {
  let message = this.subject({ username: 'john.doe29348'});

  assert.equal(message.get('formattedName'), 'john doe');
});
