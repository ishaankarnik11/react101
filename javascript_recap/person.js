class Human{
    constructor(){
        this.gender = "male"
    }

    printGender = () =>{console.log(this.gender)}
}


class Person extends Human{
    constructor(){
        super();
        this.name = "ishaan"
    }

    printMyName = ()=>{console.log(`hello ${this.name}`)}
}

const ishaan = new Person();

ishaan.printMyName();
ishaan.printGender();