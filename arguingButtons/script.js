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
