$('nav').click(function () {
	$(this).toggleClass('nav-show')
})

var modal = document.getElementById('modal')
var modalImg = document.getElementById('modal__content')
var modalCaption = document.getElementById('modal__caption')

function openModal(img) {
	modal.style.display = "flex"
	modalImg.src = img;
}