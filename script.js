var oval = document.querySelector('#oval')
var control = false;
oval.onclick = nightmode
function nightmode() {
	if (control) {
oval.style.marginLeft = '4px'
document.querySelector('#company-info').style.backgroundColor = ''
document.querySelector('#block1').style.backgroundColor = ''
document.querySelector('#main').style.backgroundColor = ''
document.querySelector('footer').style.backgroundColor = ''
document.querySelector('body').style.backgroundColor = ''
document.querySelector('#top-image').style.border = ''
document.querySelector('#post').style.color = ''
document.querySelector('#site_button').style.backgroundColor = ''
document.querySelector('#site_button').style.color = ''
document.querySelector('#text').style.color = ''
document.querySelectorAll('#heading')[0].style.color = ''
document.querySelectorAll('#heading')[1].style.color = ''
document.querySelector('#position').style.color = ''
document.querySelector('#site_button').onmouseover = function(){
	document.querySelector('#site_button').style.backgroundColor = '#ccccff'
}

document.querySelector('#site_button').onmouseleave = function(){
	document.querySelector('#site_button').style.backgroundColor = '#F4F6F8'
}

control = !control
	} else {
oval.style.marginLeft = '30px'
document.querySelector('#company-info').style.backgroundColor = '#19202D'
document.querySelector('#block1').style.backgroundColor = '#19202D'
document.querySelector('#main').style.backgroundColor = '#19202D'
document.querySelector('footer').style.backgroundColor = '#19202D'
document.querySelector('body').style.backgroundColor = '#121721'
document.querySelector('#post').style.color = 'white'
document.querySelector('#top-image').style.border = '#121721 solid 1px'
document.querySelector('#site_button').style.backgroundColor = '#404040'
document.querySelector('#site_button').style.color = 'white'
document.querySelector('#text').style.color = 'white'
document.querySelectorAll('#heading')[0].style.color = 'white'
document.querySelectorAll('#heading')[1].style.color = 'white'
document.querySelector('#position').style.color = 'white'
document.querySelector('#site_button').onmouseover = function(){
	document.querySelector('#site_button').style.backgroundColor = '#585858'
}

document.querySelector('#site_button').onmouseleave = function(){
	document.querySelector('#site_button').style.backgroundColor = '#404040'
}
control = !control

}


}