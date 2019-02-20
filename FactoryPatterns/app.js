function MemberFactory() {
  //create a new member object
  //@param username and type of member
  this.createMember = function(name, type) {
    let member;
    if (type === "simple") {
      member = new SimpleMumbership(name);
    } else if (type === "standard") {
      member = new StandardMumbership(name);
    } else if (type === "super") {
      member = new SuperMumbership(name);
    }
    //set member object property type
    member.type = type;
    //define method
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMumbership = function(name) {
  this.name = name;
  this.cost = "R45";
};
const StandardMumbership = function(name) {
  this.name = name;
  this.cost = "R60";
};
const SuperMumbership = function(name) {
  this.name = name;
  this.cost = "R90";
};

const members = [];

const faactry = new MemberFactory();

members.push(faactry.createMember("John Doe", "simple"));
members.push(faactry.createMember("Sara Doe", "standard"));
members.push(faactry.createMember("Marcia Nkuna", "super"));
members.push(faactry.createMember("Sarah corner", "simple"));
members.push(faactry.createMember("John Corner", "super"));

members.forEach(member => {
  console.log(member.define());
});
