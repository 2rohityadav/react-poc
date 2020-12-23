const prod = {
  url: {
   BASE_PATH:'/fs/flexiTerm/',
   BASE_URL: 'https://myapp.herokuapp.com',
   API_URL_USERS: 'https://myapp.herokuapp.com/users'}
 };
 const sit = {
  url: {
   BASE_PATH:'/fs/flexiTerm/',
   BASE_URL: 'https://myapp.herokuapp.com',
   API_URL_USERS: 'https://myapp.herokuapp.com/users'}
 };
 const dev = {
  url: {
   BASE_PATH:'/fs/flexiTerm/',
   BASE_URL: 'http://localhost:8080'
  }
 };
 export const config = process.env.NODE_ENV === 'development' ? dev : prod;