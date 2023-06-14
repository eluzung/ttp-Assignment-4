// The 'btn1' and 'btn2' buttons' onclick events are handled by this code.
// When 'btn1' is clicked, 'I'm right' is displayed in an element with the id 'text1', 'text2' is cleared of its message, 'btn1' is hidden, and 'btn2' is revealed.
// When the "btn2" button is hit, the message "No, I'm right!" appears in the //element with the id "text2," the message in the element with the id "text1" is 
// cleared, "btn2" is hidden, and "btn1" is revealed.


document.getElementById('btn1').onclick = function() {
    document.getElementById('text1').innerHTML = "I'm right"
    document.getElementById('text2').innerHTML = ""
    document.getElementById('btn1').style.display = 'none'
    document.getElementById('btn2').style.display = 'block'

}

document.getElementById('btn2').onclick = function() {
    document.getElementById('text2').innerHTML = "No, I'm right!"
    document.getElementById('text1').innerHTML = ""
    document.getElementById('btn2').style.display = 'none'
    document.getElementById('btn1').style.display = 'block'
}
