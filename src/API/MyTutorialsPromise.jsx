export const MyTutorialsPromise = (email) => {
    return fetch(`https://assignment-11-server-omega-vert.vercel.app/tutors?email=${email}`).then(res => res.json())
};