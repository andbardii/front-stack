class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    
}

let firstPerson = new User('Andrea', 'Bardi', '20', 'Bologna');
console.log(firstPerson);

let secondPerson = new User('Federico', 'Caselli', '37', 'Livorno');
console.log(secondPerson);

/* FUNZIONA SOLO FUORI DA USER */
compareAges = function(){
    if(firstPerson.age < secondPerson.age){
        return secondPerson.firstName + " " + "è la persona più grande";
    }else if (secondPerson.age < firstPerson.age){
        return firstPerson.firstName + " " + "è la persona più grande"
    }else{
        return secondPerson.firstName + " " + "e" + " " + firstPerson.firstName + " " + "hanno la stessa età"
    }
}

console.log(compareAges());

