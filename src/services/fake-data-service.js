const faker = require('faker');

const NUM_DOCS = 15;

function generateMedecins() {
    let docList = [];
    for(let i=0;i<NUM_DOCS;i++) {

        const maxReviews = faker.random.number({min: 1, max: 7});
        let reviews = [];
        for(let j=0;j<maxReviews;j++) {
            reviews.push({
                id: faker.random.uuid(),
                nom: faker.name.firstName() + ' ' + faker.name.lastName(),
                titre: faker.company.catchPhraseAdjective(),
                comment: faker.lorem.paragraph(3),
                date: faker.date.recent().toLocaleDateString("en-US", {month: 'long', day: 'numeric', year:'numeric'}),
                score: faker.random.number({min:1, max:5})
            });
        }

        const maxFormation = faker.random.number({min: 1, max: 3});
        let education = [];
        for(let j=0;j<maxFormation;j++) {
            education.push({
                id: faker.random.uuid(),
                titre: 'Diplome de ' + faker.name.jobArea(),
                sousTitre: 'Université de ' + faker.address.city(),
                année: faker.random.number({min: 1950, max: 2019}),
                description: faker.name.jobDescriptor()
            });
        }

        let experience = [];
        for(let j=0;j<maxFormation;j++) {
            experience.push({
                id: faker.random.uuid(),
                titre: faker.name.jobTitle(),
                sousTitre: faker.company.companyName(),
                année: faker.random.number({min: 1950, max: 2019}),
                description: faker.name.jobDescriptor()
            });
        }

        const maxPhotos = faker.random.number({min: 0, max: 7});
        let photos = [];
        for(let j=0;j<maxPhotos;j++) {
            photos.push({ src: "~/images/photo.png" });
        }

        const maxLangues = faker.random.number({min: 1, max: 7});
        let langues = [];
        for(let j=0; j<maxLangues;j++) {
            let exist = false;
            const fakelangue = faker.address.country().substring(0,2).toUpperCase();
            if(j!=0) {
                langues.forEach(langue => {
                    if(langue === fakelangue) {
                        exist = true;
                    }
                });
            }

            if(!exist) {
                langues.push({ langue: fakelangue });
            }
        }

        let sexe = faker.random.boolean();
        let nom = faker.name.lastName(parseInt(sexe + '')) + ' ' + faker.name.firstName(parseInt(sexe + ''));
        let doc = {
            id: faker.random.uuid(),
            nom: nom,
            sexe: sexe,
            titre: faker.random.boolean() ? 'Dr.' : 'Pr.',
            specialite: faker.name.jobTitle(),
            photo: !sexe ? '~/images/doc-man.png' : '~/images/doc-woman.png',
            ville: faker.address.city(),
            adresse: faker.address.streetAddress(true),
            email: faker.internet.email(nom.split(' ')[0], nom.split(' ')[1]),
            phone: faker.phone.phoneNumber(),
            description: faker.lorem.paragraph(1),
            langues: langues,
            images: photos,
            education: education,
            experience: experience,
            reviews: reviews,
            password: faker.internet.password(8)
        }
        docList.push(doc);
    }
    return docList;
}

module.exports = generateMedecins;