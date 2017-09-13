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
    "welcomeMessage": "Full-stack Web Developer",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "VB.net", "Drupal", "Wordpress"
    ],
    "biopic": "images/me.jpg"
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
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    //loop through skills array
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

    }
};


var education = {
    "schools": [{
            "name": "Franklin University",
            "location": "Columbus, Ohio",
            "degree": "Bachelor of Science",
            "majors": ["Information Technology"],
            "dates": "2003 - 2006"
        },
        {
            "name": "Cincinnati State Technical and Community College",
            "location": "Cincinnati, Ohio",
            "degree": "Associate of Applied Science",
            "majors": ["Database Management Systems Technology"],
            "dates": "2001 - 2003"
        }
    ],
    "onlineCourses": [{
        "title": "Frontend Nanodegree",
        "school": "Udacity",
        "dates": "Present",
        "url": "https:\/\/www.udacity.com"
    }]
};




education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", schools.name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools.degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        //loop through majors array
        if (schools.majors.length > 0) {
            for (var i = 0; i < schools.majors.length; i++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools.majors);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

        }

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools.dates);
        $(".education-entry:last").append(formattedSchoolDates);
    });


    education.onlineCourses.forEach(function(course) {
        var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(formattedOnlineCourseTitle);

        var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedOnlineCourseSchool);

        var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineCourseDate);

        var formattedOnlineCourseURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineCourseURL);
    });


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
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        $(".work-entry:last").append(formattedEmployer);

        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedWorkTitle);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDescription);

    });
};



var projects = {
    "projects": [{
            "title": "Louie's Legacy Animal Rescue Website",
            "dates": "In Progress",
            "description": "Maintainence of website on Wordpress platform",
            "images": ["images/llar_1.png", "images/llar_2.png", "images/llar_3.png"]
        },
        {
            "title": "Red Hound Reiki Website",
            "dates": "2016",
            "description": "Built in bootstrap",
            "images": ["images/rhr_1.png", "images/rhr_2.png", "images/rhr_3.png"]
        },
        {
            "title": "Why There Are Words Website",
            "dates": "2016",
            "description": "Rebuild of site in Wordpress",
            "images": ["images/wtaw_1.png", "images/wtaw_2.png", "images/wtaw_3.png"]
        }
    ]
};
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0)  {
          for (var i = 0; i < project.images.length; i++) {
                  var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                  $(".project-entry:last").append(formattedImage);
      }
    }
  });
};

$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
