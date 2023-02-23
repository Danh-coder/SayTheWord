const renderImg = () => {
    const editedImg = document.querySelector('.img-to-edit')
    html2canvas(editedImg, {
        logging: true,
        useCORS: true,
        proxy: "http://localhost:3000/proxy"
    }).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, "Final image.png");
        });
    });
}