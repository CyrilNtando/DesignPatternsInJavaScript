const Singleton = (function() {
  //create instance variable
  let instance;

  //create and object
  function createInstance(name, surname) {
    const object = new Object({
      name: name,
      surname: surname
    });
    return object;
  }

  return {
    getInstance: function(name, surname) {
      //if instance variable is empty create new object
      if (!instance) {
        //call create instance and get new object
        instance = createInstance(name, surname);
      }
      //return the instance variable
      return instance;
    }
  };
})();

const InstanceA = Singleton.getInstance("Ntando", "Nkuna");
console.log(InstanceA.name + " " + InstanceA.surname);

const InstanceB = Singleton.getInstance("Cyril", "Nkuna");
console.log(InstanceB.name + " " + InstanceB.surname);
