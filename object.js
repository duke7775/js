const student = {
    name : "Tom",
    age : 20,
    number : 1000,
    score : "F",
    introduce: function(){
        return("My name is " + this.name)
    },
    isAdult: function(){
        if (this.age >= 18 ){
            return("You are an adult")
        }
        else{
            return("No,You are under 18")
        }
    },
    getLevel: function(){
        if(this.score === "A"){
            return "Excellent";
        }
        else if(this.score === "B"){
            return "Great"
        }
        else if(this.score === "C"){
            return "Pass"
        }
        else{
            return "Fail"
        }
    }


};

console.log(student.name);
console.log(student.number);
console.log(student.introduce());
console.log(student.isAdult());
console.log(student.getLevel())



