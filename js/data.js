let json =	
	{"employees":
	[
	    {
	    "objectId":"01",
	    "firstName":"John", 
	    "lastName":"Doe",
		"image": "http://johnwickerson.github.io/john.jpg",
		"bio" : "John has worked for us for over 10 years in our ever growing sales department"
		
		},

	    {
	    "objectId":"02",
	    "firstName":"Anna", 
	    "lastName":"Smith",
		"image":"http://www.pwc.com/us/en/about-us/leadership/assets/laura-cox-kaplan.jpg",
		"bio" : "Anna has worked for us for over 15 years in our ever growing sales department"
		},

	    {
	    "objectId":"03",
	    "firstName":"Peter", 
	    "lastName":"Jones",
		"image":"http://www.petershallard.com/wp-content/uploads/Peter-Shallard-ShrinkforEntrepreneurs.jpg",
		"bio" : "Peter has worked for us for over 6 years in our ever growing sales department"
		}
	]}
let Data = json.employees;

// console.log(Data);
export {
	Data
};





