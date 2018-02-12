var comImg = '<img id="completed" src="images/complete.jpg">';

/* ------------- adding the TASKS to the list -------------------------*/

var add = document.getElementById('add');
add.addEventListener('click', valueAdd);

function valueAdd(){


	if(!document.getElementById('task').value=='')
		// UL
	var ulist = document.getElementById('mainBarList');

	// entered data
	var value = document.getElementById('task').value;

	//li
	var list = document.createElement('li');
	list.classList.add('LList');

	// adding data to list
	list.innerText= value;

	//button with class delete and innner html
	var buttonDel = document.createElement('button');
	buttonDel.id ='delete';

	//create img

	var imgDel = document.createElement('img');
	imgDel.id="deleted";
	imgDel.src="images/delete.png";
	imgDel.addEventListener('click',removeItem);

	var imgComp = document.createElement('img');
	imgComp.id="completed";
	imgComp.src="images/complete.jpg";
	imgComp.addEventListener('click',completedItem);


	//button with class delete and innner html
	var buttonCom = document.createElement('button');
	buttonCom.id='complete'

	ulist.appendChild(list);
	list.appendChild(buttonDel);
	buttonDel.appendChild(imgDel);
	buttonCom.appendChild(imgComp);
	list.appendChild(buttonCom);
	ulist.insertBefore(list ,ulist.childNodes[0]);

	document.getElementById('task').value = '';
}

/* -------------------- Deleted-------------------*/

	function removeItem(){
	//grab the list
	var item = this.parentNode.parentNode;
	//grab the UL to remove the child LI
	var parent = item.parentNode;

	//remove the child LI
	parent.removeChild(item); 
}

/* -------------------- Completed and Incomplete-------------------*/

function completedItem()
{

		var id= this.id;

		if(id=='completed'){

		this.src="images/refresh.png";
		this.id = "completedTask";
		var Llist =  this.parentNode.parentNode;
		var Ulist = Llist.parentNode;

		console.log(Ulist);
		console.log(Llist);

		var ulist = document.getElementById('completeList');
		ulist.appendChild(Llist);
		this.addEventListener('click',completedItem);
			}

		if(id=='completedTask'){

		this.src="images/complete.jpg";
		this.id = "completed";
		var Llist =  this.parentNode.parentNode;
		var Ulist = Llist.parentNode;

		console.log(Ulist);
		console.log(Llist);

		var ulist = document.getElementById('mainBarList');
		ulist.appendChild(Llist);
		this.addEventListener('click',completedItem);

		}

}


/* -------------------- change background color -----------------------------*/

 var bcolor = document.getElementById('bcolor');
 bcolor.addEventListener('click', changeColor);

 	var n=0;

 function changeColor(){
 	n = n+1;
 	if((n%2)==0)
 	{
 	document.body.style.background="#83929f";
 	document.getElementById('added').style.color="black";
 	document.getElementById('completedd').style.color="black";
 	document.getElementById('custom').style.background="#4e6172";
 	document.getElementById('sidebar').style.border="2px solid #4e6172";
 	}
 	else{
 	document.getElementById('header').style.background="rgba(0,0,0,.4)";
 	document.body.style.background="#4e6172";
 	document.getElementById('added').style.color="white";
 	document.getElementById('completedd').style.color="white";
 	document.getElementById('custom').style.background="#83929f";
 	document.getElementById('custom').style.color="white";
 	document.getElementById('sidebar').style.border="2px solid #83929f";
	 }
 }

/*-------------------------------completed first-------------------------------------*/

var compFirst = document.getElementById('compFirst').addEventListener('click',shiftDiv);

function shiftDiv(){
	var mainbar = document.getElementById('mainbar');
	mainbar.style.paddingTop="20px";
	var shiftOne = mainbar.parentNode;
	console.log(shiftOne);

	var completebar = document.getElementById('completebar');
	var shiftTwo = completebar.parentNode;
	console.log(shiftTwo);

	shiftOne.removeChild(mainbar);
	shiftTwo.appendChild(mainbar);

	shiftTwo.removeChild(completebar);
	shiftOne.appendChild(completebar);

}
