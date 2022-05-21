const Base_urls = 'https://thatcopy.pw/catapi/rest/' // base da api
const btn = document.getElementById('btn-gatos')



//api
const geraGatos = async () => {
    try {
        const data = await fetch(Base_urls)
        const json = await data.json()

        return json.webpurl
    } catch (error) {
        console.log(error.message)
    }
}

const loadImg = async () => {
    const respImg = document.getElementById('imagem-gato')
    respImg.src = await geraGatos()
}
btn.addEventListener('click', loadImg)

loadImg()
