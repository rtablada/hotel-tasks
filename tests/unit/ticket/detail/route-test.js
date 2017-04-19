import { moduleFor, test } from 'ember-qunit';

moduleFor('route:ticket/detail', 'Unit | Route | ticket/detail', {
  // Specify the other units that are required for this test.
  needs: ['service:scroller'],
});

test('it exists', function (assert) {
  const route = this.subject();

  assert.ok(route);
});
