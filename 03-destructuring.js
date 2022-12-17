const user = {
    firstName: 'Gohara',
    lastName: 'Junior',
    age: 23,
    instagram: '@gohara_',
    skills: ['Front-end', 'Back-end', 'UI/UX', 'Design'],
}

// Destructuring
const { firstName, age, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quarternary]  = skills;

console.log(fullName);