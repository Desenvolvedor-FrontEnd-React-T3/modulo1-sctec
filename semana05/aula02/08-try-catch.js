function loadProfile(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                //resolve({ id: id, name: "Ana"})
                resolve({ id, name: "Ana"})

            } else {
                reject("ID inválido!")
            }
        }, 2000)
    })
}

async function showProfile(id) {
    try {
        const profile = await loadProfile(id)
        console.log("Perfil encontrado: ", profile)
    } catch (error) {
        console.log("Perfil não encontrado: ", error)
    }
}

showProfile(9)
showProfile(-3)