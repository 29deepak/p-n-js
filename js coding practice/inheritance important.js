class person{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    describe(){
        console.log(this.name + " " + this.age)
    }
}
// now it takes the behaviour of person
class Programmer extends person {
    constructor(name,age ,marks,year_of_experience){
        // super is invoked the parent class of constructor no need to create other one
        super(name,age,marks);
        this.year_of_experience=year_of_experience
    }
    code(){
        console.log(this.name + " " + this.year_of_experience)
    }
    
}

let person1= new person("deepak",29,36)
person1.describe()
let programmer1= new Programmer("kunal",26,23,2)
programmer1.code()
// all the behaviour of parent we can used here also
programmer1.describe()
