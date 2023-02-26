var touchTimeStamp = new Date().getTime()
var sourceTextbox = undefined

const isEmpty = (classname) => !document.getElementsByClassName(classname)[0].childElementCount

const addtext = () => {
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

const activeTextbox = () => {
    textboxes = document.querySelectorAll('.textbox')
    return Array.from(textboxes).filter(textbox => document.activeElement === textbox)[0]
}

const focus = (elmnt) => {
    elmnt.focus()
}
const stopFocus = (elmnt) => {
    elmnt.blur()
}

const addTextboxEvents = (elmnt) => {
    dragElement(elmnt)
    addDoubleClickEvent(elmnt)
    addFocusEvent(elmnt)
}

const addDoubleClickEvent = (elmnt) => {
    // Mobile devices do not have doubleclick event ==> Use click event instead
    cover = elmnt.children[0]
    cover.addEventListener('click', (e) => {
        if ((new Date().getTime() - touchTimeStamp) < 500) focusEditor()
        touchTimeStamp = new Date().getTime();
    })
}

const addFocusEvent = (elmnt) => {
    elmnt.addEventListener('focus', (e) => sourceTextbox = elmnt)
}

const emptyTextbox = (textbox) => textbox.innerHTML = "<div class='cover'></div>"

const appendChild = (textbox, elmnt) => textbox.appendChild(elmnt)

const aboutToEdit = (textbox) => {
    focus(textbox)
    enableEditor()

    // Insert contents to the editor
    insertContentsToEditor(textbox)
}

const insertContentsToEditor = (textbox) => {
    emptyEditor()
    for (let index = 1; index < textbox.children.length; index++) {
        const elmnt = textbox.children[index];
        clone = elmnt.cloneNode(true)
        insertContents(clone)
    }
}

const deleteTextbox = () => sourceTextbox.remove()