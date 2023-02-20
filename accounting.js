'use strict'
let allEmployeesArr = JSON.parse(localStorage.getItem('employeeStorageArr'));

function tableData(id){
let employeeCount = 0 ;
let totalSalary = 0 ;
let avgSalary;
for(let index of allEmployeesArr){
    if (index['department'].toLowerCase() == id || id == "total"){
        employeeCount++
        totalSalary += index.salary; 
    }
}
avgSalary = Math.floor(totalSalary/employeeCount);
//Department Name td 
let depNameTd = document.createElement('td');
let depNameTdContent = document.createTextNode(id);
depNameTd.appendChild(depNameTdContent);
document.getElementById(id).appendChild(depNameTd);
//count td 
let countTd = document.createElement('td');
let countTdContent = document.createTextNode(`${employeeCount}employees`);
countTd.appendChild(countTdContent);
document.getElementById(id).appendChild(countTd);
//total salary td
let avgSalaryTd = document.createElement('td');
let avgSalaryTdContent = document.createTextNode(`${avgSalary}$`);
avgSalaryTd.appendChild(avgSalaryTdContent);
document.getElementById(id).appendChild(avgSalaryTd);
//average salary td
let totalSalaryTd = document.createElement('td');
let totalSalaryTdContent = document.createTextNode(`${totalSalary}$`);
totalSalaryTd.appendChild(totalSalaryTdContent);
document.getElementById(id).appendChild(totalSalaryTd);
}

tableData('administration');
tableData('marketing');
tableData('development');
tableData('finance');
tableData('total')