var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   };
   close: function() { 
    if (umbrella.isOpen !== true) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = true;
      return "Julia closes the umbrella!";
    }
   }
};