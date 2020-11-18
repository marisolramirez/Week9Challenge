'use strict';

"use strict"
​
class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
    
      this.name = name;
      this.job = job;
      this.age = age;
    }
    excercise() {
      console.log(`Cardio is fun! - said no one ever :( `);
    }
    fetchjob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  var p1 = new person("Anum", "Red ventures",20);
​
 class programmer extends person{
     constructor(name, job, age, language){
         super(name, job, age);
         this.language = languages;
         this.busy - true;
     }
     completeTask(){
         this.busy = false;
     }
​
     acceptNewTask(){
         this.busy = true;
     }
​
​
     offerNewTask(){
      if (this.busy){
          console.log('${this.name} cant accept anymore jobs right now');
      } else{
        console.log('${this.name} is open to new tasks');
      }
     }
      
​
     learnlANGUAGE(NewLang){
         this.languages.push(newLang);
     }
​
     listLanguages(){
         console.log(this.languages);
     }
 }
​
 var t1 = new programmer("Samia", "Programmer", 15,["html"]);
 var t2 = new programmer("Rida","Developer",19,["javascript"]);
​
 console.log(t2.busy);
 t2.completeTask();
 console.log(t2.busy);
 t2.acceptNewTask();
 console.log(t2.busy);
 t2.completeTask();
 t2.offerNewTask();
 console.log(t2.languages);
 t2.learnLanguages("mySQL");
 t2.listLanguages();
​
 console.log(t1.busy);
 t1.completeTask();
 console.log(t1.busy);
 t1.acceptNewTask();
 console.log(t1.busy);
 t1.completeTask();
 t1.offerNewTask();
 console.log(t2.languages);
 t1.learnLanguages("Urdu");
 t1.listLanguages();
