console.log('it works');
function Foo(){
    
  }
  var food = {a: "Magical this"};
  Foo.call(food);
  

  function Foo(){
    console.log(this); // prints {}?
    }