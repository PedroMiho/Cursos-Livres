async function resolverPromise(){

    const myPromise = new Promise((resolve, rejeita) => {
    window.setTimeout(() => {
        resolve('Resolvida')
    }, 3000)
    });

    const resolved = await myPromise 
    .then((result) => result + 'Passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message))

    return resolved
}

console.log(resolverPromise())