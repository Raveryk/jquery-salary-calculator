$(document).ready(onReady);


function onReady() {
console.log('JS');

$('#submit-button').on('click', addInputs);


};


let salaryTotal = 0;


function addInputs() {


$('.table-row').empty();    


console.log('Adding Inputs');

let employee = {
    firstName: $('#in-first-name').val(),
    lastName: $('#in-last-name').val(),
    idNum: $('#in-id-num').val(),
    jobTitle: $('#in-job-title').val(),
    salary: $('#in-salary').val()
}

$('.display-inputs').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNum}</td>
    <td>${employee.jobTitle}</td>
    <td>${employee.salary}</td>
</tr>`);

let salary = (Number(employee.salary));
salaryTotal += salary;


clearInputs();
monthCosts();

console.log('Total Annual Salary: ', salaryTotal);
    
}

function clearInputs() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-id-num').val('');
    $('#in-job-title').val('');
    $('#in-salary').val('');
}

function monthCosts() {

let monthCost = (salaryTotal / 12).toFixed(2);

// $('#month-cost-out').
$('#month-cost-out').empty().append(monthCost);

if( monthCost > 20000) {
    $('#month-cost-out').css("background-color", "red");
}

}