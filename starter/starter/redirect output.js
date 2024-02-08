(function () {
  var oldLog = console.log;
  var consoleOutput = document.getElementById("consoleOutput");

  console.log = function () {
    // Call the original console.log function with all arguments
    oldLog.apply(console, arguments);

    // Display each message on a new line
    for (var i = 0; i < arguments.length; i++) {
      consoleOutput.innerHTML += "<p>" + arguments[i] + "</p>";
    }
  };
})();