let eventClickedBold = 0;

document.getElementById('btn-bold').addEventListener('click', function() {
    eventClickedBold++;
    if(eventClickedBold % 2 != 0) {
        document.getElementById('editor-field').style.fontWeight = 'bold';
        document.getElementById('btn-bold').style.backgroundColor = 'gray';
        document.getElementById('btn-bold').style.Color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.fontWeight = 'normal';
        document.getElementById('btn-bold').style.backgroundColor = 'inherit';
        document.getElementById('btn-bold').style.Color = 'white';
    }
})

let eventClickedItalic = 0;
document.getElementById('btn-italic').addEventListener('click', function() {
    eventClickedItalic++;
    if(eventClickedItalic % 2 != 0) {
        document.getElementById('editor-field').style.fontStyle = 'italic';
        document.getElementById('btn-italic').style.backgroundColor = 'gray';
        document.getElementById('btn-italic').style.Color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.fontStyle = 'normal';
        document.getElementById('btn-italic').style.backgroundColor = 'inherit';
        document.getElementById('btn-italic').style.Color = 'white';
    }
})

let eventClickedUnderline = 0;
document.getElementById('btn-underline').addEventListener('click', function() {
    eventClickedUnderline++;
    if(eventClickedUnderline % 2 != 0) {
        document.getElementById('editor-field').style.textDecoration = 'underline';
        document.getElementById('btn-underline').style.backgroundColor = 'gray';
        document.getElementById('btn-underline').style.Color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textDecoration = 'none';
        document.getElementById('btn-underline').style.backgroundColor = 'inherit';
        document.getElementById('btn-underline').style.Color = 'white';
    }
})