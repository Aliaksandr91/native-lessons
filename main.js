const user = {
    name: 'Bob',
    age: 23
}
//CRUD
//Create - Read - Update - Delete

const copyUser = {
    name: user.name,
    age: user.age
}

const copySuperUser = {...user}





const users = [
    {
        id: 1,
        name: "Alex",
        isStudent: true
    },
    {
        id: 2,
        name: "Bob",
        isStudent: true
    },    {
        id: 3,
        name: "Tom",
        isStudent: true
    }
]

const newUser = {
    id: 4,
    name: "Hunter",
    isStudent: true
}

//const updatedUsers = [...users, newUser]

// const updatedUsers = [];
// for (let i = 0; i <users.length ; i++) {
//     updatedUsers.push(users[i])
// }
// updatedUsers.push(newUser)

const updatedUsers = users.filter(st => st.id !== 3)
console.log(updatedUsers)


const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const suoerUser2 = {
    ...superUser,
    address: {...superUser.address, city: "Bobrujsk"}
}
console.log(suoerUser2)