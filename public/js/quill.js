var sourceTextbox = undefined

var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }],
    ['bold', 'italic', 'underline'],        // toggled buttons
    [{ 'color': [] }, { 'background': [] }, { 'align': [] }],          // dropdown with defaults from theme
];

var quill = new Quill('.editor-container', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

quill.on('text-change', function(delta, oldDelta, source) {
    emptyTextbox(sourceTextbox)
    document.querySelector('.ql-editor').childNodes.forEach((elmnt) => {
        clone = elmnt.cloneNode(true)
        appendChild(sourceTextbox, clone)
    })

    addTextboxEvents(sourceTextbox)
});

function focusEditor() {
    quill.focus()
}

function enableEditor() {
    quill.enable()
    document.querySelector('.text-properties').style.opacity = 1
}

function disableEditor() {
    quill.enable(false)
    document.querySelector('.text-properties').style.opacity = 0.4
}

function EditorFocus() {
    return document.activeElement.className.includes('ql')
}

function emptyEditor() {
    document.querySelector('.ql-editor').innerHTML = ''
}

function insertContents(elmnt) {
    document.querySelector('.ql-editor').appendChild(elmnt)
}

function monitorEditorFocus() {
    Object.keys(window).forEach(key => {
        if (/^on/.test(key)) {
            window.addEventListener(key.slice(2), event => {
                if (!EditorFocus() && !atLeastOneTextboxFocus()) {
                    console.log(atLeastOneTextboxFocus());
                    disableEditor()
                    emptyEditor()
                }
            });
        }
    });
}

monitorEditorFocus()