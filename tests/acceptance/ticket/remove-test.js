import { test } from 'qunit';
import moduleForAcceptance from 'quore/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ticket/remove');

test('visiting /ticket/remove', (assert) => {
  server.createList('ticket', 5);

  visit('/tickets/3');

  click('.work-order__remove');

  andThen(() => {
    assert.equal(server.db.tickets.length, 4);


    assert.equal(currentURL(), '/');
  });
});
