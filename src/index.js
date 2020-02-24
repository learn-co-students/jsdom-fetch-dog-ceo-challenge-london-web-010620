console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImgContrainer = document.getElementById('dog-image-container')
console.log(dogImgContrainer)

const getURl = fetch(imgUrl)
    .then(response => response.json()
        .then(result => {
            result.message.forEach(imageUrl => addImageFromUrl(imageUrl))
        }))

const addImageFromUrl = (url) => {
    const imageTag = document.createElement('img')
    imageTag.src = url
    dogImgContrainer.appendChild(imageTag)
}