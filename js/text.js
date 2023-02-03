function isEmpty(classname) {
    return !document.getElementsByClassName(classname)[0].childElementCount
}

function addtext() {
    if (isEmpty('img-to-edit')) {
        alert('Upload an image first')
        return
    }

    $('.img-to-edit').append(`
        <div class="textbox" tabindex="0" ondblclick="$('input').trigger('select')">
            <input type="text" name="" id="" value="Add text here!">                            
        </div>
    `)

    nodes = document.querySelectorAll('.textbox')
    elmnt = nodes[nodes.length - 1]
    focus(elmnt)
    dragElement(elmnt)
    addDoubleClickEvent(elmnt)
    addResizeInput()
}

function focus(elmnt) {
    elmnt.focus()
}
function stopFocus(elmt) {
    elmt.blur()
}
function addDoubleClickEvent(elmnt) {
    elmnt.addEventListener('dblclick', (event) => {
        focus(elmnt.children[0])
    });
}

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

function addResizeInput() {
    $('input')
        // event handler
        .keyup(resizeInput)
        // resize on page load
        .each(resizeInput);
}