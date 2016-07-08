//Capture interval from keydown to keyup and set equal to the inhale

$(document).ready(function(){

var inhaleInterval = 0;
inhaleSecs = [];
var exhaleExists = false;
var inhaleBegin;
var exhaleInitiation;

intBreathObj = {};
intBreathArr = [];

breathObj = {};
breathArr = [];


//On keydown of space bar, initiate inhale 
$(document).keydown(function(e){
	var inhaleInitiation;

	if(e.keyCode === 32){
		// console.log("thy keydown works");
		inhaleInitiation = Date.now();
		// console.log("inhale initiation" + inhaleInitiation);
		inhaleSecs.push(inhaleInitiation);

	}


// console.log(inhaleSecs);

})



//Initiate beginning of exhale on keyup
$(document).keyup(function(e){

	inhaleBegin = inhaleSecs[0];
	inhaleSecs = [];
	console.log('Here is the inhale beginning ' + inhaleSecs);
	if(e.keyCode === 32){
		// console.log('the keyup works');
		exhaleInitiation = Date.now();
		console.log(exhaleInitiation);
	}
	// var inhaleLength = exhaleInitiation-inhaleBegin;
	// console.log("inhale length " +inhaleLength);

	intBreathObj.inhaleTS=inhaleBegin;
	intBreathObj.exhaleTS=exhaleInitiation;
	// console.log('Intermediate breath obj ', intBreathObj);
	intBreathObj = {};
	intBreathArr.push(intBreathObj);
	// console.log("Int Arr: ", intBreathArr);

	for(var i = 0; i < intBreathArr.length; i++){
			breathObj.inhaleLength = intBreathArr[i].exhaleTS - intBreathArr[i].inhaleTS;
			breathObj.exhaleLength = intBreathArr[i].exhaleTS - intBreathArr[i + 1].inhaleTS;
			breathObj.totalLength = breathObj.inhaleLength + breathObj.exhaleLength;
			console.log("breath Obj: " , breathObj);
			breathArr.push(breathObj);
			console.log("breath array: ", breathArr)
	}
	
})


//Need to get exhale beginning time and get an exhale stop time
//Exhale is exhaleInitiation- next beginning breath time

/*

If exhaleInhalation exists then take inhaleBegin - exhaleInitiation and set to exhale time

*/

//inhaleInterval = time between keydown and keyup
// var inhaleLength = inhaleSecs-exhaleInitiation;

//Create array of inhales



























})