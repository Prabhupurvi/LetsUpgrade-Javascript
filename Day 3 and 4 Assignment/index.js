
// Question 3A
var details=[
{
    Name:"Purvi",
    Age:23,
    Country:"India",
    Hobbies:["Singing","Dancing","Cooking"]
},

{
    Name:"Jacob",
    Age:50,
    Country:"US",
    Hobbies:["Reading","Typing"]
},
{
    Name:"Sam",
    Age:"38",
    Country:"Canada",
    Hobbies:["Dancing","Gaming"]
},
]
// Question 3B
function display(){
    for(var i in details){
        console.log(details[i])
        }

        }
display();


// Question 4A
function agelessthan(){
    for(let i in details){
        if(details[i].Age<30){
            console.log(details[i]);
        }
    }
}
agelessthan();


// Question 4B
function checkCountry(){
    for (let i in details){
        if(details[i].Country=="India"){
            console.log(details[i])
        }
    }
}
checkCountry();