// async function orderPizzaFromAPI(){
//     console.log("place order to the server...");
// const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
// console.log('unpack data from response');
// const responseBody = await response.json();
// console.log('2. status code ', response.status);
// //print first name
// console.log("final data ", responseBody.name);
// }
// orderPizzaFromAPI();
// test: to create a test block. and expect: to verify thing
const {test, expect} = require('@playwright/test');
// {request}: telling playwright : I'm doing API testing > open the toolbox and give me ONLY request tool.
// ()=>{}: shortcut for function
test('get a user from JSONPlaceholder API', async({request})=>{
    console.log("1. Sending GET request using Playwright...");
    //await request.get('URL') : send the GET request and wait for the server reply
const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
console.log('verify status code 200 ');
expect(response.status()).toBe(200);
// always put away after async as it take time to process the request.
const responseBody = await response.json();
console.log('response body ', responseBody.name);
})
test('create new request with POST request', async({request}) => {

const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
        name: "QA Master",
            username: "qa_master_2026",
            email: "qamaster@test.com"
    }
});
console.log('1. verify status code 201: ')
expect (response.status()).toBe(201);
const responseBody = await response.json();
console.log('2. verify user created name QA Master: ');
expect (responseBody.name).toBe("QA Master");
console.log('3. verify response created id: ', responseBody.id);
})