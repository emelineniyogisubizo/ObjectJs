//QUESTION ONE

function User(name, stepsWalked){
    this.name = name;
    this.stepsWalked = stepsWalked;

    this.totalSteps = function(){
        let total = 0;
        let allSteps= stepsWalked.map(step => {
            total +=step.steps;
        });
        return total
    }

    this.averageSteps = function(){
      return (this.totalSteps()/stepsWalked.length)
      
    };
   
};
const user = new User ("Emeline",[{day:'Mon',steps:500},{day:'Tues',steps:1000},{day:'Wed',steps:200},{day:'Thurs',steps:50},{day:'Friday',steps:700},{day:'Sat',steps:80}]);
user.totalSteps();
console.log(user.totalSteps())
user.averageSteps();
console.log(user.averageSteps());

// QUESTIN TWO
function Recipe(name,ingredients,cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function (){
        console.log(recipe.name,recipe.ingredients);
     
    }

    this.quickMeal = function (){
        if (this.cookTime < 30){
            return true;
        }
        else{

        return false;
        }
    }
}
const recipe = new Recipe('Pilau',['rice','onions','oil','ginger','garlic'],20);
recipe.displayRecipe();
console.log(recipe.quickMeal());


//QUESTION THREE
function Car(model,mileage,serviceHistory){
    this.model = model;
    this.mileage = mileage;
    this.serviceHistory = serviceHistory;
    this.addService = function(date){
        this.serviceHistory.push(date);
        console.log(car.serviceHistory);
    },
    
    this.lastServiceDate = function(){
        return this.serviceHistory.at(-1);
         
        }   
    };
   
const car = new Car ("Toyota",12000,["12th-02-2025","20th-05-2025"]);

console.log(car.addService("23rd-03-2024"));
console.log(car.lastServiceDate());


//QUESTION FOUR

const playlist = {
    songs:["Tuza","Jaribu","Sabrina"],
    addSong: function(title){
        this.songs.unshift(title)
        return this.songs
    },
    
    removeSong: function(title){
        this.songs.shift(title)
        return this.songs
    },

    listOfSongs: function(){
        return this.songs;
    }
};

console.log(playlist.addSong("katerina"))
console.log(playlist.removeSong("katerina"))
console.log(playlist.listOfSongs())

// QUESTION FIVE
//create a constructor
//create a method that adds completed lesson to completed lessons
//create a method that will keep progress of number of lessons already completed
//create an object to access the constructor
//use me object to access the methods of constructor

function Course(title,lessons,completedLessons){
    this.title = title;
    this.lessons = lessons;
    this.completedLessons = completedLessons;
    this.markComplete = function(lesson){
        
             this.completedLessons.unshift(lesson);
             return this.completedLessons
    }

    this.getProgress = function(){
        console.log(`${completedLessons.length} out of ${lessons.length} completed`)

    }

};
const course = new Course ("Design",['colors','photoshop','illustrator','figma'],['colors']);
console.log(course.markComplete('photoshop'));
course.getProgress();


