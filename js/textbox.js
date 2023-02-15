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
            <div class="cover"></div>
            <p>Add text here!</p>
        </div>
    `)

    nodes = document.querySelectorAll('.textbox')
    elmnt = nodes[nodes.length - 1]
    addTextboxEvents(elmnt)
}

function atLeastOneTextboxFocus() {
    textboxes = document.querySelectorAll('.textbox')
    return Array.from(textboxes).filter(textbox => document.activeElement === textbox).length;
}

function focus(elmnt) {
    elmnt.focus()
}
function stopFocus(elmnt) {
    elmnt.blur()
}

function addTextboxEvents(elmnt) {
    dragElement(elmnt)
    addDoubleClickEvent(elmnt)
    addFocusEvent(elmnt)
}

function addDoubleClickEvent(elmnt) {
    cover = elmnt.children[0]
    cover.addEventListener('dblclick', (event) => {
        enableEditor()
        focusEditor()
    });
}

function addFocusEvent(elmnt) {
    elmnt.addEventListener('focus', (e) => {
        console.log('SourceTextbox', elmnt);
        sourceTextbox = elmnt
    })
}

function emptyTextbox(textbox) {
    textbox.innerHTML = "<div class='cover'></div>"
}

function appendChild(textbox, elmnt) {
    textbox.appendChild(elmnt)
}

function aboutToEdit(textbox) {
    focus(textbox)

    // Insert contents to the editor
    insertContentsToEditor(textbox)
}

function insertContentsToEditor(textbox) {
    emptyEditor()
    for (let index = 1; index < textbox.children.length; index++) {
        const elmnt = textbox.children[index];
        clone = elmnt.cloneNode(true)
        insertContents(clone)
    }
}

// addTextboxEvents(document.querySelector('.textbox'))