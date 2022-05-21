async function resolvePromise() {
    const meuPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvido!!'))
        }, 2000) // 2000 quer dizer 2 segundos
    })

    const resolved = await meuPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message))

    return resolved
}