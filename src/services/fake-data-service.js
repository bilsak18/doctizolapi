const faker = require('faker');

const   NUM_DOCS = 15;

function generateMedecins() {
    let docList = [];
    for(let i=0;i<NUM_DOCS;i++) {
        let sexe = faker.random.boolean();
        let nom = faker.name.lastName(parseInt(sexe + '')) + ' ' + faker.name.firstName(parseInt(sexe + ''))
        let doc = {
            id: faker.random.uuid(),
            nom: nom,
            sexe: sexe,
            titre: faker.random.boolean() ? 'Dr.' : 'Pr.',
            specialite: faker.name.jobTitle(),
            photo: faker.internet.avatar(),
            ville: faker.address.city(),
            adresse: faker.address.streetAddress(true),
            email: faker.internet.email(nom.split(' ')[0], nom.split(' ')[1]),
            phone: faker.phone.phoneNumber(),
            description: faker.lorem.paragraph(1),
            password: faker.internet.password(8)
        }
        docList.push(doc);
    }
    return docList;
}

module.exports = generateMedecins;