export const MyTutorialsPromise = (email) => {
    return fetch(`http://localhost:3000/tutors?email=${email}`).then(res => res.json())
};