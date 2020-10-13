const users = [
    { ID : "admin", password : "1234", name : "administrator"},
    { ID : "dbworud1234", password : "123456", name : "YuJaeKyung"}
]

export function signIn({ ID, password }) {
    const user = users.find(
        (user) => user.ID === ID && user.password === password
    )
    if (user === undefined) throw new Error()
    return user
}