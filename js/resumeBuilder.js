var formattedName = HTMLheaderName.replace("%data%", "Louise Lo");
var formattedRole = HTMLheaderRole.replace("%data%", "Executive Assistant");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	name: "Louise",
	role: "Executive Assistant",
	contacts: {
		mobile: "(917) 882-2281",
		email: "lolouisenyc@gmail.com",
		gitHub: "LoLouise",
		twitter: "thisislouiselo",
		location: "New York, NY"
	},
	picture: "http://placehold.it/100x80",
	welcomeMessage: "Welcome to My Interactive Resume",
	skills: ["Programming", "Web Design", "JavaScript", "HTML", "CSS"]
};


var work = {
	jobs: [
	{
		employer: "Miller & Cusenza, P.C",
		title: "Executive Assistant",
		location: "New York, NY",
		dates: "2010-2014",
		description: "Provided executive level support to senior partner of CPA firm with a demonstrated ability to improvise, improve procedures and meet demanding deadlines."
	},
	{
		employer: "The Health Beauty Connection",
		title: "Marketing Coordinator",
		location: "New York, NY",
		dates: "2010-2014",
		description: "Developed promotional campaigns and rewards programs to target new demographics and improve customer retention."
	}
	]
};

var education = {
	schools: [
	{
		name: "Stony Brook University",
		location: "Stony Brook, NY",
		year: "2010",
		degree: "Bachelor of Science",
		majors: "Business Management",
		minors: "Information Systems"
	},
	{
		name: "Bronx High School of Science",
		location: "Bronx, NY",
		year: "2006",
		degree: "Advanced Regents Diploma",
		majors: "N/A"
	}],
	onlineCourses: [
	{
		title: "Intro to HTML and CSS",
		school: "Udacity",
		year: "2015",
		url: "https://www.udacity.com/course/ud304"
	},
	{
		title: "Responsive Web Design Fundamentals",
		school: "Udacity",
		year: "2015",
		url: "https://www.udacity.com/course/ud893"
	},
	{
		title: "How to use Git and GitHub",
		school: "Udacity",
		year: "2015",
		url: "https://www.udacity.com/course/ud775"
	},
	{
		title: "JavaScript Basics",
		school: "Udacity",
		year: "2015",
		url: "https://www.udacity.com/course/ud804"
	}]


}

var projects = {
	project: [
	{
		title: "Interactive Resume",
		dates: "2015",
		desciption: "Use JavaScript and JQuery to create an interactive resume website",
		images: "http://placehold.it/400x300"
	},
		{
		title: "Personal Website",
		dates: "2015",
		desciption: "Create a personal website using Bootstrap",
		images: "http://placehold.it/400x300"
	},
		{
		title: "Responsive Website",
		dates: "2015",
		desciption: "Create a resposive website using flex boxes",
		images: "http://placehold.it/400x300"
	}
	]
}

projects.display = function(){
	
	for (key in projects.project){
		
		
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[key].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[key].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[key].desciption));

}
}

$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").append(HTMLbioPic.replace("%data%",bio.picture));

if (bio.contacts)
{
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.gitHub));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));	
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

if (bio.skills)
{
	$("#header").append(HTMLskillsStart);
	for (index in bio.skills){
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
}}


for (job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);

$(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[job].employer))+(HTMLworkTitle.replace("%data%", work.jobs[job].title)));
$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}
for (school in education.schools)
{
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append((HTMLschoolName.replace("%data%", education.schools[school].name))+(HTMLschoolDegree.replace("%data%", education.schools[school].degree)));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].year));
	$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
}
$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);
for (course in education.onlineCourses)
{	
	$(".education-entry:last").append((HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title))+(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.onlineCourses[course].year));
	$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
}

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});
projects.display();
$("#mapDiv").append(googleMap);
initializeMap();
