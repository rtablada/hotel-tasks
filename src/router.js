import Ember from 'ember';
import config from '../config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('ticket', { path: '/' }, function () {
    this.route('detail', { path: '/:ticket_id' });
  });
});

export default Router;
