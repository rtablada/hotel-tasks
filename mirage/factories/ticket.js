import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.sentence(4);
  },

  requestDate: () => faker.date.recent(),
  lastUpdated: () => faker.date.recent(),

  guestAvatar: () => faker.internet.avatar(),

  guest() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  room() {
    return faker.random.number({ min: 100, max: 505 });
  },

  notice: () => faker.lorem.sentence(),
  checkout: () => faker.date.future(),

  detailsItem: () => faker.lorem.word(),
  detailsIssue: () => faker.lorem.word(),
  detailsWhere: () => faker.lorem.word(),
  detailsDescription: () => faker.lorem.paragraph(),

  due: () => faker.date.future(),
  assignee() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  photos() {
    const length = faker.random.number({ min: 1, max: 3 });

    const pics = [];

    for (let index = 0; index <= length; index += 1) {
      pics.push(faker.internet.avatar());
    }

    return pics;
  },

  status() {
    return faker.random.arrayElement([
      'info',
      'warning',
      'danger',
      'success',
    ]);
  },
});
