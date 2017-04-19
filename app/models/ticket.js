import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  status: DS.attr('string'),
  requestDate: DS.attr('date'),
  lastUpdated: DS.attr('date'),

  guestAvatar: DS.attr('string'),
  guest: DS.attr('string'),
  room: DS.attr('string'),
  notice: DS.attr('string'),
  checkout: DS.attr('string'),

  detailsItem: DS.attr('string'),
  detailsIssue: DS.attr('string'),
  detailsWhere: DS.attr('string'),
  detailsDescription: DS.attr('string'),

  due: DS.attr('string'),
  assignee: DS.attr('string'),

  photos: DS.attr(),
});
