document.getElementById("myButton").onclick = function () {
    let compartment = Number(document.getElementById("myText").value);

    if (compartment == 1) {
        document.getElementById("age").innerHTML = "Your son is in a compartment with a smaller number";
    } else if (compartment == 2) {
        document.getElementById("age").innerHTML = "Your son is in a compartment with a larger number";
    } else if (compartment == 3) {
        document.getElementById("age").innerHTML = "You are in compartment 3 your Sonn is not here search continue";
    } else if (compartment == 4) {
        document.getElementById("age").innerHTML = "You are in compartment4 your Sonn is not here search continue";
    } else if (compartment == 5) {
        document.getElementById("age").innerHTML = "Yes, you found your son congratulation!!.";
    } else
        document.getElementById("age").innerHTML = "We are Sorry we can't fund your Sonn Search compartment form 1 to 5 compartments ";
}

