//Cookie is used to track session ID

//Simulated server-side session store
const sessionStore = {
    "abc123" :{
        userId:101,
        username:"Chaithanya",
        role:"Student"
    }
};

//Simulated browser cookie value
const browserCookieSessionId = "abc123";

const sessionData = sessionStore[browserCookieSessionId];
console.log("Server-side session data:",sessionData);