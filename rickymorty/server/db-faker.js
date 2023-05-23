const { faker } = require('@faker-js/faker');

var database = { characters: [] };

for (var i = 1; i <= 20; i++){
  database.characters.push({
    id: faker.number.int(),
    name: faker.person.fullName(),
    status: faker.string.numeric(),
    species: faker.person.sexType(),
    gender: faker.person.gender(),
    origin: faker.location.city(),
    location: faker.location.country(),
    image: faker.image.avatar(),
  });
}
