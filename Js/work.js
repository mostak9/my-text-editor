// text functionality
let eventClickedBold = 0;

document.getElementById('btn-bold').addEventListener('click', function() {
    eventClickedBold++;
    if(eventClickedBold % 2 != 0) {
        document.getElementById('editor-field').style.fontWeight = 'bold';
        document.getElementById('btn-bold').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-bold').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.fontWeight = 'normal';
        document.getElementById('btn-bold').style.backgroundColor = 'inherit';
        document.getElementById('btn-bold').style.color = 'white';
    }
})

let eventClickedItalic = 0;
document.getElementById('btn-italic').addEventListener('click', function() {
    eventClickedItalic++;
    if(eventClickedItalic % 2 != 0) {
        document.getElementById('editor-field').style.fontStyle = 'italic';
        document.getElementById('btn-italic').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-italic').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.fontStyle = 'normal';
        document.getElementById('btn-italic').style.backgroundColor = 'inherit';
        document.getElementById('btn-italic').style.color = 'white';
    }
})

let eventClickedUnderline = 0;
document.getElementById('btn-underline').addEventListener('click', function() {
    eventClickedUnderline++;
    if(eventClickedUnderline % 2 != 0) {
        document.getElementById('editor-field').style.textDecoration = 'underline';
        document.getElementById('btn-underline').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-underline').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textDecoration = 'none';
        document.getElementById('btn-underline').style.backgroundColor = 'inherit';
        document.getElementById('btn-underline').style.color = 'white';
    }
})


// align functionality
let eventClickedLeft = 0
document.getElementById('btn-left').addEventListener('click', function() {
    eventClickedLeft++;
    if(eventClickedLeft % 2 != 0) {
        document.getElementById('editor-field').style.textAlign = 'left';
        document.getElementById('btn-left').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-left').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textAlign = 'left';
        document.getElementById('btn-left').style.backgroundColor = 'inherit';
        document.getElementById('btn-left').style.color = 'white';
    }
})

let eventClickedCenter = 0
document.getElementById('btn-center').addEventListener('click', function() {
    eventClickedCenter++;
    if(eventClickedCenter % 2 != 0) {
        document.getElementById('editor-field').style.textAlign = 'center';
        document.getElementById('btn-center').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-center').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textAlign = 'left';
        document.getElementById('btn-center').style.backgroundColor = 'inherit';
        document.getElementById('btn-center').style.color = 'white';
    }
})

let eventClickedJus = 0
document.getElementById('btn-center').addEventListener('click', function() {
    eventClickedCenter++;
    if(eventClickedCenter % 2 != 0) {
        document.getElementById('editor-field').style.textAlign = 'center';
        document.getElementById('btn-center').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-center').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textAlign = 'left';
        document.getElementById('btn-center').style.backgroundColor = 'inherit';
        document.getElementById('btn-center').style.color = 'white';
    }
})

let eventClickedJustify = 0
document.getElementById('btn-justify').addEventListener('click', function() {
    eventClickedJustify++;
    if(eventClickedJustify % 2 != 0) {
        document.getElementById('editor-field').style.textAlign = 'justify';
        document.getElementById('btn-justify').style.backgroundColor = '#E5E7EB';
        document.getElementById('btn-justify').style.color = '#185abd';
    }
    else {
        document.getElementById('editor-field').style.textAlign = 'left';
        document.getElementById('btn-justify').style.backgroundColor = 'inherit';
        document.getElementById('btn-justify').style.color = 'white';
    }
})