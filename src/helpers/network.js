import { getToken } from "./authentication";
const dbURI = require('../config/keys').dbURI;

function loginRequest({ email, password }) {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:5000/user/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    return reject(json);
                }
                resolve(json);
            }).catch(e => reject(e));
        }).catch(e => reject(e))
    });
}

function showBooking({ city, sport }) {
    return new Promise((resolve, reject) => {
        fetch(dbURI + "schools/city/" + city + "/" + sport, {
            method: "get",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    return reject(json);
                }
                resolve(json);
            }).catch(e => reject(e));
        }).catch(e => reject(e))
    });
}
function createLogin({ email, password }) {
    return new Promise((resolve, reject) => {
        fetch(dbURI + "user/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    return reject(json);
                }
                resolve({ msg: 'User created' });
            }).catch(e => reject(e));
        }).catch(e => reject(e))
    });
}
function createBooking({ city, sports, school, date, duration, time }) {
    return new Promise((resolve, reject) => {
        fetch(dbURI + "book", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                city,
                sports,
                school,
                date,
                duration,
                time
            })
        }).then(response => {
            response.json().then(json => {
                if (!response.ok) {
                    return reject(json);
                }
                resolve({ msg: 'User created' });
            }).catch(e => reject(e));
        }).catch(e => reject(e))
    });
}

// function getDashboard() {
//     return new Promise((resolve, reject) => {
//         fetch("http://127.0.0.1:5000/dashboard", {
//             headers: {
//                 'Authorization': getToken()
//             }
//         }).then(response => {
//             if (!response.ok) {
//                 reject(new Error("Unathorized"));
//                 return;
//             }
//             response.json().then(json => {
//                 resolve(json.data);
//             }).catch(e => reject(e));
//         }).catch(err => reject(err))
//     })
// }

export {
    // getDashboard,
    loginRequest,
    createLogin,
    showBooking,
    createBooking
}
