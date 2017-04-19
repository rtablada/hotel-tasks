import { moduleForComponent, test } from 'ember-qunit';
import testSelector from 'ember-test-selectors';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('ticket-item', 'Integration | Component | ticket item', {
  integration: true,
});

test('it renders with an example ticket', function (assert) {
  this.set('ticket', {
    title: 'Show a title',
    id: 2,
    status: 'warning',
    requestDate: moment('2017-04-18T09:05:00-05:00'),
  });

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ticket-item ticket=ticket}}`);

  assert.equal(this.$(testSelector('ticket-item-name')).text().trim(), this.get('ticket.title'));
  assert.equal(this.$(testSelector('ticket-item-time')).text().trim(), '09:05 AM');
  const link = this.$(testSelector('ticket-item-link'));

  assert.ok(link.hasClass('ticket-item--warning'));
});
