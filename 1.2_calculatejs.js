
        let a = prompt("Enter the first number:");
        let b = prompt("Enter the second number:");
        let opr = prompt("Enter the operator:");

        // Convert input strings to numbers
        a = parseFloat(a);
        b = parseFloat(b);
        if (isNaN(a) || isNaN(b)) {
            alert("Invalid input");
        } else {
            switch (opr) {
                case '+':
                    alert("Result: " + (a + b));
                    break;
                case '-':
                    alert("Result: " + ( a - b));
                    break;
                case '*':
                    alert("Result: " + (a * b));
                    break;
                case '/':
                    alert("Result: " + (a/b));
                    break;
                default:
                    alert("Invalid operator");
            }
        }
   
