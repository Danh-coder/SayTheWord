const imgInput = document.getElementById('img-input')

imgInput.addEventListener('change', (e) => {
    const img = imgInput.files[0]
    if (!validImg(img)) {
        alert('Your file is not an image, please choose another!')
        return
    }

    const imgUrl = URL.createObjectURL(img)
    showImage(imgUrl)
})

const ImgTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
    "image/jpg"
];

const validImg = (file) => ImgTypes.includes(file.type)