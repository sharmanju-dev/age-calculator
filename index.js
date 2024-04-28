function calculate() {
    let dob = new Date(cd.value); // parse the input date
    let today = new Date(); // get today's date
  
    // calculate the difference in years, months, and days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    // adjust for negative values of months and days
    if (months < 0 || (months == 0 && days < 0)) {
      years--;
      months += 12;
      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
    }
  
    // output the result
    if (years < 0) {
      ageText.innerHTML = "Please enter a valid date";
    } else {
      ageText.innerHTML = years + " years, " + months + " months, " + days + " days";
    }
  }
  