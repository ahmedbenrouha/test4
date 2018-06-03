/*TEST4*/
let myTimer,F4_Execution_end;
const Execution_start = new Date();

function cb(){

	if((new Date()) - F4_Execution_end < 300)
		clearTimeout(myTimer);

	myTimer=setTimeout(() => {
  		console.log('cb call after '+(new Date()-Execution_start)+' milliseconds');
	},300);
}

function f4(callBack) {

	F4_Execution_end = new Date();
}

function SynchronousPause(duration) {

	while ((new Date()) - F4_Execution_end <= duration) { /* Do nothing */ }
}




/*TEST*/
f4(cb());
SynchronousPause(100);
f4(cb());
SynchronousPause(200);
f4(cb());

