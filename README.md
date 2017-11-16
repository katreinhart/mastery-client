# Mastery LMS  

LINKS:  
* [Deployed site](https://kat-mastery-lms.surge.sh)  
* [Frontend repo](https://github.com/katreinhart/mastery-client)  
* [Heroku app](https://kat-mastery-server.herokuapp.com)
* [Backend repo](https://github.com/katreinhart/mastery-server)

_Mastery_ is a Learning Management System (LMS)targeted at 5th-8th grades.  

Digital and "blended" learning is becoming more and more prevalent as more educational institutions embrace the "inverted classroom" model or a blended approach to curriculum. Allowing students to have access to lecture videos, notes, and checkpoints outside of the classroom frees up class time for answering questions and doing projects. However, most existing LMS programs are built on aging technologies and are not very user-friendly or open-source. 

### Overview:

The admin view has 4 main resources: 
- Courses
- Classes
- Students
- Teachers

* _Courses_ contains all the curriculum. Courses are organized into Units and Lessons.  
* _Units_ organize curriculum into _Lessons_, which contain _Questions_.  
* _Classes_ represent groups of _Students_. Each Class is identified with a name and assigned to a _Teacher_.  
* _Students_    

### Goals: 
1. Create a platform for middle school educators to manage and deliver curriculum online.
1. Create a welcoming user experience where educators and students can easily find what they need and interact with the curriculum, not the tool. 

## User Stories: 
DONE:  
- As an administrator/educator, I can create curriculum courses, organized into units and lessons.  
- I can add and remove students from classes, switch students' classes, and change the teacher assigned to a class.  

IN PROGRESS:  
- As an educator, I can view student progress on assigned curriculum.
- I can see how many times a student has submitted an individual exercise, to see if they are struggling or if topics are too easy for them.  

NEXT STEPS: 
- As a student, I can view curriculum using an easy workflow. I can easily see what units and lessons I need to view next. 
- I can see my latest scores on assignments and review past scores.  
- As an educator, I can send feedback messages to students on an individual lesson or unit.  
- As a student, I can read and respond to feedback messages sent to me.  

### Next steps:  

1. Implement front-end routing, either using a library or a scratch solution. 
1. Use a bundler like Webpack or Browserify to bundle scripts instead of having 50+ ```<script>``` tags.
1. Flesh out student view; allow student to easily see what units are next, what their recent scores are, and feedback on recent projects/assignments.
1. Student record keeping
1. Integration with Khan Academy API to allow educators to easily import curriculum and video lessons from the industry-standard open learning platform, while retaining tracking ability of the custom LMS.  