const prod = {
  url: {
   BASE_PATH:'/flexiTerm/',
   BASE_URL: 'https://prod.c.com',
   API_URL_USERS: 'https://prod.c.com/users'}
 };
 const staging = {
  url: {
   BASE_PATH:'/fs/flexiTerm/',
   BASE_URL: 'https://staging.c.com',
   API_URL_USERS: 'https://staging.c.com/users'}
 };
 const dev = {
  url: {
   BASE_PATH:'/',
   BASE_URL: 'http://localhost:8080'
  }
 };
 
//  module.exports = config = process.env.NODE_ENV === 'development' ? dev : prod;
const envConfig = (()=> {
  if(process.env.NODE_ENV === 'development'){
    return dev
    }else if(process.env.NODE_ENV === 'production'){
      return prod
    }else{
      return staging
    }
})()

module.exports = {
  envConfig
}
 
