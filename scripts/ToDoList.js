function AddToList(){
	//Validation on entering Task 
	if(document.getElementById('Task').value === '' ){
		alert("You must add Task!");
		return;
	}
  	
	//append item to list with check and close icon
	var value = document.getElementById('Task').value;
	var li = document.createElement("li");
	var div = document.getElementById('List').appendChild(li);
	div.innerHTML +='<span id="ListItem" style="width:10%">'+ value +'</span>'+ '<span ><i class="fa fa-check"  ></i>'+ '</span><span>' +'<i class="fa fa-times" id="close" aria-hidden="true"></i>'+'</span>'+ '</br>'  
	
	//remove item from list on click - close icon
	document.querySelectorAll('.fa-times').forEach(item => {
		item.addEventListener('click', event => {
			event.target.parentNode.parentNode.remove();
		})
	})

	//strike through element on click - check icon 
	document.querySelectorAll('.fa-check').forEach(item => {
		item.addEventListener('click', event => {	
			event.target.parentNode.parentNode.style.textDecoration='line-through';
			event.target.parentNode.parentNode.style.background = '#f9f9f9';
		})
	})
}
