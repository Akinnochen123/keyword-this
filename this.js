//PART 1
//question1
var data = this;
console.log(data);
//VM195:2 Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}

//this returns the window object

//question2
function logThis(){
    return this;
    }
    logThis();
    //Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}

    //the function outputs the window object, because 'this' is referring to the window object because it has a default binding to the window and it exists in the global context.

    //question3
    var instructor = {
        firstName: 'Tim',
        sayHi: function(){
        console.log("Hello! " + this.firstName);
        }
        }
        instructor.sayHi()
        //VM260:4 Hello! Tim

        //the function returns Hello! Tim, because 'this' has an implicit binding to the parent object instructor and we are simply invoking instructor.firstName.

    //question4
    var instructor = {
        firstName: 'Tim',
        info: {
        catOwner: true,
        boatOwner: true
        },
        displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
        }
        }
        instructor.displayInfo() 
        //VM266:8 Cat owner? undefined

        //the function outputs Cat Owner? undefined, because 'this' refers to the instructor and we are trying to invoke (instructor.catOwner) which will return undefined because catOwner is not a direct property of instructor but exists as a property of 'info' which is a property of instructor. so if we want it to return a value we should simply invoke this.info.catOwner. 

        //question5
        var instructor = {
            firstName: 'Tim',
            info: {
            catOwner: true,
            boatOwner: true,
            displayLocation: function(){
            return this.data.location;
            },
            data: {
            location: "Oakland"
            }
            },
            }
            instructor.info.displayLocation()
           // "Oakland"

           //the function outputs 'Oakland', because we are simply invoking instructor.data.location, so we were able to access location which is a property of data which is a property of the instructor object. 
         
           // question6
           var instructor = {
            firstName: 'Tim',
            info: {
            catOwner: true,
            boatOwner: true,
            displayLocation: function(){
            return this.location;
            },
            data: {
            location: "Oakland",
            logLocation: this.displayLocation
            }
            },
            }
            instructor.info.data.logLocation()
            //VM327:15 Uncaught TypeError: instructor.info.data.logLocation is not a functionat <anonymous>:15:22
            
            // the function returns a TypeError, because we are trying to access the displayLocation property through the data property and it does not exist as a property of data.


            //PART2
            //question1
            var obj = {
                fullName: "Harry Potter",
                person: {
                sayHi: function(){
                return "This person's name is " + this.fullName
                }
                }
                }
                
                undefined

                obj.person.sayHi.call(obj);

                //"This person's name is Harry Potter"

                //question2
                // DOM node lists and strings

                //question3
                function sumEvenArguments(){
  
                    return [].slice.call(arguments).reduce((acc,current) =>{
                                   if(current % 2 === 0){
                                       acc += current;
                                   }
                                   return acc;
                               },0)
                             
                    }

                //question4
                function arrayFrom(){
                    return [...arguments]
                 }

                 //question5
                 function invokeMax(fn,max){
                    let count = 0;
                   return function(){
                       count++;
                       if(count > max){
                           return "Maxed Out!";
                       }
                      return fn.apply(this,arguments);
                   }
                   function add(a,b){
                    return a+b
                  }
                }

                //question6
                function guessingGame(amount){
                    let answer = Math.floor(Math.random()*11);
                    let guesses = 0;
                  return function(guess){
                      guesses++;
                      if(guesses < amount){
                         if(guess > answer){
                          return "You're too high!";
                      }else if(guess < answer){
                          return "You're too low!";
                      }
                      guesses = amount;
                      return "You got it!";  
                      }else if(guesses === amount){
                          return `No more guesses the answer was ${answer}`;
                      }
                     return "You are all done playing!";
                  }
                }