import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.sentence(4);
  },

  requestDate: faker.date.recent,
  lastUpdated: faker.date.recent,

  guest() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  room() {
    return faker.random.number({ min: 100, max: 505 });
  },
  notice: faker.random.sentence,
  checkout: faker.date.future,

  detailsItem: faker.lorem.word,
  detailsIssue: faker.lorem.word,
  detailsWhere: faker.lorem.word,
  detailsDescription: faker.lorem.paragraph,

  due: faker.date.future,
  assignee() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  photos() {
    const length = faker.random.number({ min: 1, max: 3 });

    const pics = [];

    for (let index = 0; index < length; index++) {
      pics.push(faker.image.imageUrl);
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
