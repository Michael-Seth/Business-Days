function sendMail(wrkDays) {
	
   const tomorrow = new Date() 

//loop through the days 
//to the current wrkDay in the parameter
  for(i=0; i < wrkDays; i++) {
	
	 let days = tomorrow.getDay()
	 
	 // check for every Friday, if true..
	 // add 3 to every Friday 
	 //if not, add 1 to every day
	 
  	if (days === 5) {
	   tomorrow.setDate(tomorrow.getDate() + 3)
	  } else {
	   tomorrow.setDate(tomorrow.getDate() + 1)
  	}
 } return tomorrow
}
console.log(sendMail(3))