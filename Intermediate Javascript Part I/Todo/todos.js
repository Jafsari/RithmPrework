var firstLi = document.querySelectorAll('li');
var count = 0;
for (var i = 0; i < firstLi.length; i++){
firstLi[i].addEventListener('mouseover',function(){
this.style.color = 'green';
});
firstLi[i].addEventListener('mouseout',function(){
this.style.color = 'black';
});
firstLi[i].addEventListener('click',function(){
	count++
	this.classList.toggle('done')
	if (count> 3)
	this.remove()
})


}



