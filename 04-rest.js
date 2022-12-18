const user = {
    firstName: 'Gohara',
    lastName: 'Junior',
    age: 23,
    instagram: '@gohara_',
    skills: ['Front-end', 'Back-end', 'UI/UX', 'Design'],
}

// Rest (resto) operator
const { firstName, skills, ...restoUser } = user;
const [primary, ...restoSkills] = skills;

console.log(restoSkills);