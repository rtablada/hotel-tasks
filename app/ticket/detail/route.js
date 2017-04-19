import Ember from 'ember';

export default Ember.Route.extend({
  scroller: Ember.inject.service(),

  afterModel() {
    this.get('scroller').scrollVertical('.master-detail__panel-fill');
  },
});
