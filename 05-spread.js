const user = {
    firstName: 'Gohara',
    lastName: 'Junior',
    age: 23,
    instagram: '@gohara_',
    skills: ['Front-end', 'Back-end', 'UI/UX', 'Design'],
    active: false,
}

// Spread (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, 'Marketing'],
    active: true,
};

console.log({ user });
console.log({ updatedUser });