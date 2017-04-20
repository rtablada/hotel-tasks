import Ember from 'ember';

export default Ember.Route.extend({
  scroller: Ember.inject.service(),

  afterModel() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.get('scroller').scrollVertical('.master-detail__panel-fill');
    });
  },
});
