const myName = "John";
let age= 30;
let isLearningJavaScript = true;

console.log("My name is " + myName);
console.log("I am " + age + " years old.");
console.log("Am I learning JavaScript? " + isLearningJavaScript);
let myAge = age+1;
console.log("Next year, I will be " + myAge + " years old.");

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("all browsers: " + browsers);
console.log("third browser: " + browsers[2]);
browsers.push("Opera");
console.log("updated browsers: " + browsers);
for(let b of browsers){
    console.log("currently testing on: " + b);
}
console.log("searching for safari in browsers...");
for(let b of browsers){
    if(b === "Safari"){
        console.log("found Safari!");
    }else{
        console.log(b +" is not Safari, keep looking...");
    }
}
function checkBrowser(browserName){
    if(browserName === "Safari"){
        console.log("found Safari!");
    }else{
        console.log(browserName +" is not Safari, keep looking...");
    }
}
checkBrowser("Chrome");
checkBrowser("Safari");
checkBrowser("Brave");
let userProfile ={
    username: "John_Doe",
    password: "securepassword123",
    isLoggedIn: true
};
console.log("Testing login for user: " + userProfile.username);
console.log("testing for user password: " + userProfile.password);

async function orderPizzaFromAPI(){
    console.log("place order to the server...");
const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
console.log('unpack data from response');
const responseBody = await response.json();
console.log('2. status code ', response.status);
//print first name
console.log("final data ", responseBody.name);
}
orderPizzaFromAPI();
// test: to create a test block. and expect: to verify thing
const {test, expect} = require('@playwright/test');
test('get a user from JSONPlaceholder API', async(request)=>{
const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
console.log('verify status code 200 ');
expect(response.status()).toBe(200);
})