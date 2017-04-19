import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  tagClass: Ember.computed('ticket.status', function () {
    const status = this.get('ticket.status');

    return `ticket-item ticket-item--${status}`;
  }),
});
