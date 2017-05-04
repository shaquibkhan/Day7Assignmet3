function counter()				//counter() is declared..
{
	var i=0;					//variable is declared within counter()..
	function innerFunction()	//innerFunction is declared within counter()..
	{
		++i;					// incrmenting value of variable..
	  console.log(i);			
	}
	return innerFunction;		//counter() is returning innerfunction() defination..
}
var result=counter();  			//variable is storing function defination..
result();						//counter() is invoked by result var ...
result();
result();
result();				
result();
result();

