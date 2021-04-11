$(document).ready(onReady);


function onReady() {
console.log('JS');


//created click event to add input field values to DOM
$('#submit-button').on('click', addInputs);


};

// declare global variable to contain salary totals
let salaryTotal = 0;
let salaryData = 0;
let salarySum = 0;
// let item = '';

const employeesArray = [];



function addInputs() {
 
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
</tr>`);

//create functionality for the delete button to run function when clicked.
$('.employee-delete').on('click', deleteEmployee);
$('.employee-delete').on('mouseenter', deleteColor);
$('.employee-delete').on('mouseleave', unbind);

function deleteColor() {
    $(this).css("color", "red");
    }
    
function unbind() {
    $(this).css("color", "");
    }

//get rid of table row border for delete button
$('.employee-delete').parent().css("border", "none");

//calculate salary sum totals
let salary = (Number(employee.salary));
salaryTotal += salary;

employeesArray.push(employee);

//run functions
clearInputs();
monthCosts();


console.log('Total Annual Salary: ', salaryTotal);
    
} //end addInputs




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
// removeData();

};// end of deleteEmployee










// function getData() {

// console.log('In getData...');

// salaryData = $('.salaryInput').data();
// // $('.salaryInput').empty();
// salarySum += salaryData;


// }

// function removeData() {
// console.log('In removeData..ll');

// let item = $(this).closest('tr').children('.idInput').data();

// console.log(item)
// // $('.salaryInput').removeData();

// }
