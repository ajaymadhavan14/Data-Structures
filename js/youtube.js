const person = {
    age:30,
    personAge : function(){
        console.log(this.age);
    }
}

const newO1 = person.personAge

const newO2 = person.personAge.bind(person)

newO1()
newO2()