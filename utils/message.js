/*
    Error Messages EN-US
    Created : 7th September 2023
*/

const MESSAGE = {
    CREATE: 'Your new record has been created!',
    UPDATE: 'New details of have been saved with me!',
    DELETE: 'Your details has been permanently removed from my memory!',
}


const languageResource = {

    /* Error Messages */
    errors: {

        dbConnection: 'Snap! our database server got lost!',
        dbInsert: 'I think you did not paid attention to details!',
        dbUpdate: 'You need to keep check on what you want!',
        dbDelete: 'Do you really know what you were trying to do?',
        dbSelect: 'May be you are looking for right thing but in wrong space!',

        alreadyExist: 'I am already have similar record, guess you are duplicating!',
        notFound: 'Are you sure you are looking for right information?',

        wrongPassword: 'Are you trying to break into system, cause your password mismatch?',
        validationError: 'You forgot to provide me correct details!',
        implementMe: 'Implement Me !!!',
    },

    /* Route Messages */
    routes: {
        accessDenied: 'You are not authorized to view this space!',
        tokenExpired: 'Sorry! but as per my records you need to login again!',
        blank: 'The space you were trying to access is in nebula!'
    },

    /* Success Messages */
    success: {

        userDelete: MESSAGE.DELETE,
        userCreate: MESSAGE.CREATE,
        userUpdate: MESSAGE.UPDATE,
    }
}

// Exports ------------- Needed utmost as without these nothing will work
module.exports = languageResource
