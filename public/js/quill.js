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

quill.on('text-change', (delta, oldDelta, source) => {
    emptyTextbox(sourceTextbox)
    document.querySelector('.ql-editor').childNodes.forEach((elmnt) => {
        clone = elmnt.cloneNode(true)
        appendChild(sourceTextbox, clone)
    })

    addTextboxEvents(sourceTextbox)
});

const focusEditor = () => {
    quill.focus()
}

const enableEditor = () => {
    quill.enable()
    document.querySelector('.text-properties').style.opacity = 1
    setTimeout(() => {
        document.querySelector('.delete-text-btn').disabled = false
    }, 100);
}

const disableEditor = () => {
    quill.enable(false)
    document.querySelector('.text-properties').style.opacity = 0.4
    setTimeout(() => { //Wait for executing the deleteTextbox function is done
        document.querySelector('.delete-text-btn').disabled = true
    }, 100);
}

const EditorFocus = () => document.activeElement.className.includes('ql')

const emptyEditor = () => {
    document.querySelector('.ql-editor').innerHTML = ''
}

const insertContents = (elmnt) => {
    document.querySelector('.ql-editor').appendChild(elmnt)
}

const monitorEditorFocus = () => {
    Object.keys(window).forEach(key => {
        if (/^on/.test(key)) {
            window.addEventListener(key.slice(2), event => {
                if (!EditorFocus() && !activeTextbox()) {
                    disableEditor()
                    emptyEditor()
                }
            });
        }
    });
}

monitorEditorFocus()