// class Governor {
//     static governorName;
//     static politicalParty;
//     static education;
//   }
//   Governor.governorName = "John Doe";
//   Governor.politicalParty = "Democrate Party";
//   Governor.education = "Law";
  
//   console.log(Governor.governorName); 
//   console.log(Governor.politicalParty); 
//   console.log(Governor.education);


class Person { 
    constructor(name, age, eyeColor) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        
    }

    eat() {
        console.log('It is yummy food');
    }

    talk() {
        console.log('Hello there!');
    }

    sleep() {
        console.log('I am going to sleep');
    }
}

class PostalWorker extends Person {
    delivery() {
        console.log('Your package is here');
    }
}

class Chef extends Person {
    cook() {
        console.log('I am cooking delicious meals');
    }

    createRecipe() {
        console.log('I am creating new recipes');
    }
}

const postalWorker1 = new PostalWorker("Fadi", 27, "brown");
const postalWorker2 = new PostalWorker("Nomi", 23, "hazel");
const chef1 = new Chef("Sam", 28, "green");
const chef2 = new Chef("Fo", 37, "black");

postalWorker1.eat();
postalWorker1.talk();
postalWorker1.sleep();

postalWorker2.delivery();
postalWorker2.talk();
postalWorker2.sleep();

chef1.eat();
chef1.talk();
chef1.sleep();

chef2.createRecipe();
chef2.cook();


class BankAccount{
    constructor(ownerName ,balance){
        this.ownerName = ownerName;
        this.balance = balance;
        this.generateAcctNum ();  
    }
    
    generateAcctNum () {
        Math.random();
        console.log(Math.random() * 100000)

    }


    deposit (){
        console.log( 'your deposit')
    }
    withdraw (){
        console.log ( ' here')
    }
}

 class CheckingAccount extends BankAccount {
    constructor(ownerName, balance,overdraftEnabled	) {
         super(ownerName, balance,overdraftEnabled	);
         this.overdraftEnabled = overdraftEnabled;
        }
        withdraw (){
            console.log ( ' here')
        }
 }

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance) {
        super(ownerName, balance);
      }
    
      withdraw(amount) {
        console.log("Withdrawals are not allowed in this account.");
      }
    }
    const account1 = new BankAccount("Alice", 1000);

   





