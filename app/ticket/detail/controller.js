import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async remove(ticket) {
      await ticket.destroyRecord();

      this.transitionToRoute('ticket');
    },
  },
});
