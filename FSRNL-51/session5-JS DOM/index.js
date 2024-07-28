console.log("Hello");

let emp = {
    firstname: "First",
    lastName: "last",
    fullName: function(){
        return this.firstname + this.lastName
    }
}

console.log(`${emp.firstname}  ${emp.lastName} ${emp.fullName()}` )
emp.age = 45
console.log(emp)