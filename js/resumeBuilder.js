//var name = "Justine Meyer"
//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Web Developer"
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
  "name": "Justine Meyer",
  "role": "Web Developer",
  "contacts": {
    "mobile": "513-238-3938",
    "email": "justine@pbjweb.co",
    "github": "dangermonkey",
    "twitter": "Justine D Meyer",
    "location": "Cincinnati, Ohio"
  },
  "welcomeMessage": "Hello!",
  "skills": [
    "HTML5", "CSS3", "JavaScript", "VB.net", "Drupal", "Wordpress"
  ],
  "biopic": "images/fry.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedRole);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName);

  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedBiopic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

//loop through skills array
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = "";
  for (var i = 0; i < bio.skills.length - 1; i++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }

}
};


var education = {
  "schools": [{
      "name": "Franklin University",
      "location": "Columbus, Ohio",
      "degree": "Bachelor of Science",
      "majors": "Information Technology",
      "dates": "2003 - 2006"
    },
    {
      "name": "Cincinnati State Technical and Community College",
      "location": "Cincinnati, Ohio",
      "degree": "Associate of Applied Science",
      "majors": "Database Management Systems Technology",
      "dates": "2001 - 2003"
    }
  ],
  "onlineCourses": [{
    "title": "Frontend Nanodegree",
    "school": "Udacity",
    "dates": "Present",
    "url" : "https:\/\/www.udacity.com"
  }]
};

education.display = function() {
  for (var schools in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].majors);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    $(".education-entry:last").append(formattedSchoolDates);
  }

      for (var onlineCourses in education.onlineCourses) {
        var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
        $(".education-entry:last").append(formattedOnlineCourseTitle);

        var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
        $(".education-entry:last").append(formattedOnlineCourseSchool);

        var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
        $(".education-entry:last").append(formattedOnlineCourseDate);

        var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
        $(".education-entry:last").append(formattedOnlineCourseURL);

      }


};

var work = {
  "jobs": [{
      "employer": "CET/ThinkTV",
      "title": "Interactive Media Developer",
      "location": "Cincinnati, Ohio",
      "dates": "In Progress",
      "description": "Main web developer for both stations."
    },
    {
      "employer": "Critical Mass Media",
      "title": "Project Manager",
      "location": "Cincinnati, Ohio",
      "dates": "2003 - 2008",
      "description": "Marketing project manager for direct mail campaigns."
    }
  ]
};

work.display = function() {
  for (var jobs in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
    $(".work-entry:last").append(formattedEmployer);

    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
    $(".work-entry:last").append(formattedWorkTitle);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
    $(".work-entry:last").append(formattedWorkDescription);

  }
};



var projects = {
  "projects": [{
      "title": "Louie's Legacy Animal Rescue Website",
      "dates": "In Progress",
      "description": "Maintainence of website on Wordpress platform",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Red Hound Reiki Website",
      "dates": "2016",
      "description": "Built in bootstrap",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Why There Are Words Website",
      "dates": "2016",
      "description": "Rebuild of site in Wordpress",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    }
  ]
};
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
};

bio.display();
education.display();
work.display();
projects.display();
