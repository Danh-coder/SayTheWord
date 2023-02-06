function isEmpty(classname) {
    return !document.getElementsByClassName(classname)[0].childElementCount
}

function addtext() {
    if (isEmpty('img-to-edit')) {
        alert('Upload an image first')
        return
    }

    $('.img-to-edit').append(`
        <div class="textbox" tabindex="0">
            <textarea name="text" placeholder="Add text here!" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
            <div class="cover"></div>
        </div>
    `)

    nodes = document.querySelectorAll('.textbox')
    elmnt = nodes[nodes.length - 1]
    focus(elmnt)
    dragElement(elmnt)
    addDoubleClickEvent(elmnt)
    addBlurEvent(elmnt)
    resizeTextbox(elmnt)
}

function focus(elmnt) {
    elmnt.focus()
}
function stopFocus(elmnt) {
    elmnt.blur()
}
function addDoubleClickEvent(elmnt) {
    cover = elmnt.children[1]
    cover.addEventListener('dblclick', (event) => {
        [textarea, cover] = event.target.parentElement.children;
        focus(textarea)
        cover.style.display = "none"
    });
}

function resizeTextbox(elmnt) {
    new ResizeObserver(() => {
        textarea = elmnt.children[0]
        textarea.style.height = ""
        textarea.style.height = textarea.scrollHeight + "px"
    }).observe(elmnt.children[0])
}

function addBlurEvent(elmnt) {
    textarea = elmnt.children[0]
    textarea.addEventListener('blur', (e) => {
        textbox = e.target.parentElement
        cover = textbox.children[1]

        cover.style.display = "block"
        focus(textbox)
    })
}