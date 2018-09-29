const database = require('./fakeDatabase');

const returnEmail = (email) => {
    return !!database[email] ? database[email].email : 'That user does not exist';
}

module.exports = {
    returnEmail: returnEmail
}