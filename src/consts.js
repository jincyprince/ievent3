
const dbURI = (process.env.NODE_ENV === 'production') ? 'https://ievent-db.herokuapp.com/' : 'http://localhost:5000/';
export { dbURI }
