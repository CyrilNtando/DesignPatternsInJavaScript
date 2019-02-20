//Basic Structure

(function() {
  //Desclare private variables and functions

  return {
    //Declare public variables and functions
  };
})();

const UIctrl = (function() {
  let text = "Hello world";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UIctrl.callChangeText();
