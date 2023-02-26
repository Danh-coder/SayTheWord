fetch('https://api.unsplash.com/photos/?client_id=vLB36IXFr-ABmTOKpUEw9F6_aJkV-j-XzCN_M4pn8sw')
.then((response) => response.json())
.then((images) => {
    for (let index = 0; index < images.length; index++) {
        const image = images[index];
        menuImage = document.querySelector('.image-menu')
        $('.image-menu').append(
            `<li class="unsplash-image my-2 mx-2" onclick="showImage('${image.urls.raw}')" style="height: 150px; display: inline-flex">
                <img class="img-fluid" src=${image.urls.thumb} alt="">
            </li>`
        )
    }
});

const showImage = (url) => {
    $('.img-to-edit').empty()
    $('.img-to-edit').append(`
        <img src="${url}" alt="" srcset="" style="height: auto; max-height: 80vh; max-width: 100%; display: block; margin: auto">
    `)
}