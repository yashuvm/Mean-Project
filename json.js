var person={
    name:"brad",
    age:366,
     address:{
       street:"ssss",
       city:"london"
   },
   children:["Brianan","Nochlos"]
}

var pepole=[
    {
        name:"Brad",
        age:333

    },{
        name:"john",
        age:55
    },
    {
        name:"Sara",
        age:22
    }
]
//person=JSON.stringify(person);
//person=JSON.parse(person);
//console.log(pepole[0].age);

for(var i=0;i<pepole.length;i++){
    console.log(pepole[i].age);
}