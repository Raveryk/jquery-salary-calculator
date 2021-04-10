$(document).ready(onReady);


function onReady() {
console.log('JS');


//created click event to add input field values to DOM
$('#submit-button').on('click', addInputs);
// $('#submit-button').on('click', getData);


};

// declare global variable to contain salary totals
let salaryTotal = 0;
let salaryData = 0;
let salarySum = 0;

const employeesArray = [];



function addInputs() {


// $('.table-row').empty();    


console.log('Adding Inputs');

let employee = {
    firstName: $('#in-first-name').val(),
    lastName: $('#in-last-name').val(),
    idNum: $('#in-id-num').val(),
    jobTitle: $('#in-job-title').val(),
    salary: $('#in-salary').val()
}

//create table data to append onto DOM
$('.display-inputs').append(`<tr class="inputs">
    <td class="firstInput">${employee.firstName}</td>
    <td class="lastInput">${employee.lastName}</td>
    <td class="idInput">${employee.idNum}</td>
    <td class="jobInput">${employee.jobTitle}</td>
    <td class="salaryInput">$${employee.salary}</td>
    <td><button class="employee-delete">Delete</button></td>
</tr>`).text();



//create functionality for the delete button to run function when clicked.
$('.employee-delete').on('click', deleteEmployee);
// $('.employee-delete').on('click', removeData);



//get rid of table row border for delete button
$('.employee-delete').parent().css("border", "none");

//calculate salary sum totals
let salary = (Number(employee.salary));
salaryTotal += salary;

employeesArray.push(employee);


clearInputs();
monthCosts();


console.log('Total Annual Salary: ', salaryTotal);
    
}


//clear input field values
function clearInputs() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-id-num').val('');
    $('#in-job-title').val('');
    $('#in-salary').val('');
}// end clearInputs

//function to calculate monthly cost totals
function monthCosts() {
//calculate monthly cost
let monthCost = (salaryTotal / 12).toFixed(2);

// empty and append monthly cost to DOM
$('#month-cost-out').empty().append(monthCost);

// create conditional to activate red background color once limit is reached.
if( monthCost > 20000) {
    $('#month-cost-out').css("background-color", "red");
};

} //end of monthCosts

function deleteEmployee() {
console.log('in deleteEmployee...');

//target the item clicked on and remove whole row
$(this).closest('tr').remove();

};// end of deleteEmployee

// function getData() {

// console.log('In getData...');

// salaryData = $('.salaryInput').data();
// // $('.salaryInput').empty();
// salarySum += salaryData;


// }

// function removeData() {
// console.log('In removeData..ll');

// $(this).removeData();
// // $('.salaryInput').removeData();
// }
