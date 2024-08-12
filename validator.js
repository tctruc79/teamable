function isInvalidEmail(userObject) {
    return !userObject.email.includes("@")
}

function isEmplyPayload(userObject) {
    return Object.keys(userObject).length === 0
}

module.exports = {
    isInvalidEmail,
    isEmplyPayload
}