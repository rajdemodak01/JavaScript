class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const raj=new User('Raj De Modak')
// console.log(raj.createId());//will give error as "Static" is used

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const raj2=new Teacher("Raj De Modak","raj@gmail.com")
raj2.logMe()
raj2.createId()//will give error as "Static" is used