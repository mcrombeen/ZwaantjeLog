window.onload = function() {
  var form1 = document.getElementById("form1");
  if (form1) {
    form1.addEventListener("click", function() {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSegYIyLrO3mW1iLP8wdA-5sdGC70NMXunTXBi272jjxWUdQVw/viewform?usp=sf_link", "_blank");
    });
  } else {
    console.error("Element with ID 'form1' not found in the DOM");
  }
  
  var form2 = document.getElementById("form2");
  if (form2) {
    form2.addEventListener("click", function() {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfoF0PVygVg1Oza16STeb1ET9ZiK-DV2agR-CrgBYaexI-MYg/viewform?usp=sf_link";
    });
  } else {
    console.error("Element with ID 'form2' not found in the DOM");
  }
  
  var form3 = document.getElementById("form3");
  if (form3) {
    form3.addEventListener("click", function() {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSfoF0PVygVg1Oza16STeb1ET9ZiK-DV2agR-CrgBYaexI-MYg/viewform?usp=sf_link", "_blank");
    });
  } else {
    console.error("Element with ID 'form3' not found in the DOM");
  }
  
  var form4 = document.getElementById("form4");
  if (form4) {
    form4.addEventListener("click", function() {
       window.open("https://docs.google.com/forms/d/e/1FAIpQLSftHyYQPe5HF7eTAFHwDCUSA2o2udecWzFd1Iosu7Z_IOowQQ/viewform?usp=sf_link", "_blank");
    });
  } else {
    console.error("Element with ID 'form4' not found in the DOM");
  }
  
  var form5 = document.getElementById("form5");
  if (form5) {
    form5.addEventListener("click", function() {
      window.location.href = "https://forms.google.com/form5";
    });
  } else {
    console.error("Element with ID 'form5' not found in the DOM");
  }
  
  var form6 = document.getElementById("form6");
  if (form6) {
    form6.addEventListener("click", function() {
      window.location.href = "https://forms.google.com/form6";
    });
  } else {
    console.error("Element with ID 'form6' not found in the DOM");
  }
};
