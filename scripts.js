let budgetString = 0;
let expensesString = 0;
let balanceString = 0;

function convert(a, b){
    let anum = Number(a);
    return anum + b;
}

let budgetview = document.querySelector(".budgetView");

function viewingbudget(){
    let budgetShow = document.querySelector(".budgetView p")
    budgetShow.textContent = "$ " + budgetString
    budgetview.appendChild(budgetShow);
}

function viewingexpenses(){
    let expensesview = document.querySelector(".expensesView");
    let expensesShow = document.querySelector(".expensesView p")
    expensesShow.textContent = "$ " + expensesString;
    expensesview.appendChild(expensesShow);
}

function viewingbalance(){
    let balanceview = document.querySelector(".balanceView");
    let balanceShow = document.querySelector(".balanceView p");
    balanceShow.textContent = "$ " + balanceString;
    balanceview.appendChild(balanceShow);
}

var ctr = 0;
function showingexpenses(a, b){
    let op
    let titlearea = document.querySelector(".title");
    let title = document.createElement("p");
    title.textContent = "-" + a;
    title.style.color = "red";
    title.style.fontSize = "xx-large";
    titlearea.appendChild(title);

    let expensearea = document.querySelector(".value");
    let expense = document.createElement("p");
    expense.textContent = "-" + b;
    expense.style.color = "red";
    expense.style.fontSize = "xx-large";
    expensearea.appendChild(expense);

    let optionsarea = document.querySelector(".options");
    let edit = document.createElement("img");
    edit.src = "images/edit.jpg";
    edit.style.width = "30px";
    edit.style.height = "30px";
    if(ctr == 0) 
    edit.style.paddingTop = "15px";
    else
    {
        edit.style.paddingTop = "2px";
        ctr = 0;
    }
    edit.style.paddingBottom = "20px";
    edit.style.paddingRight = "10px";
    edit.style.marginLeft = "2px";
    edit.addEventListener("mouseover", function () {
        edit.style.cursor = "pointer";
    });
    edit.addEventListener('click', function() {
        titlearea.removeChild(title);
        expensearea.removeChild(expense);
        optionsarea.removeChild(edit);
        optionsarea.removeChild(del);

        expensesString -= b;
        balanceString += b;

        let titleofexpense = document.querySelector("#title");
        titleofexpense.value = a;

        let expensevalue = document.querySelector("#expense");
        expensevalue.value = b;
        ctr = 1;

    })
    optionsarea.appendChild(edit);
    let del = document.createElement("img");
    del.src = "images/delete.jpg";
    del.style.width = "30px";
    del.style.height = "30px";
    del.style.paddingBottom = "20px";
    del.addEventListener("mouseover", function () {
        del.style.cursor = "pointer";
    });
    del.addEventListener('click', function() {
        titlearea.removeChild(title);
        expensearea.removeChild(expense);
        optionsarea.removeChild(edit);
        optionsarea.removeChild(del);

    })
    optionsarea.appendChild(del);

    let bre = document.createElement("br");
    optionsarea.appendChild(bre);
}

viewingbudget();
viewingexpenses();
viewingbalance();

function alerting(){
    let caution = document.querySelector(".caution");

    let box = document.createElement("p");
    box.textContent = "Field(s) cannot be empty"
    caution.appendChild(box);
    setTimeout(() => {
        caution.removeChild(box);
    }, 1500);
}

function calculatebalance(){
    let balanceShow = document.querySelector(".balanceView p");
    balanceString = budgetString - expensesString;

    if(balanceString < 0)
    balanceShow.style.color = "red";

    if(balanceString > 0)
    balanceShow.style.color = "green";
}

let calculate = document.querySelector(".cal");

calculate.addEventListener('click', ad);

function ad()
{
    let budget = document.querySelector("#budget");
    if(budget.value === "")
    alerting();
    else{
    budgetString =  convert(budget.value, budgetString);
    viewingbudget();
    calculatebalance();
    viewingbalance();
    budget.value = "";
    }
}

let add = document.querySelector(".add");

add.addEventListener('click', deduct)

function deduct(){
    let expense = document.querySelector("#expense");
    let title = document.querySelector("#title");
    if ( expense.value === "" || title.value === "")
    alerting();
    else{
    expensesString = convert(expense.value, expensesString);
    viewingexpenses();
    calculatebalance();
    viewingbalance();
    showingexpenses(title.value, expense.value);
    expense.value = "";
    title.value = "";
    }
}