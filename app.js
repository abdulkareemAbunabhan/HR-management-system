'use strict'
let id , fullName , department , level , imgUrl ;
let employeeArr = [];
let jsonForm =[];
document.getElementById("formElement").addEventListener("submit",function(event){
    event.preventDefault();
    fullName = document.getElementById('fullName').value;
    department = document.getElementById('department').value
    level = document.getElementById('level').value ; 
    imgUrl = document.getElementById('imgUrl').value ;
    let newOne = new Employee(fullName,department,level,imgUrl);
    newOne.salary = newOne.salaryCalculate();
    employeeArr.push(newOne); 
    jsonForm = JSON.stringify(employeeArr);
    localStorage.setItem("employeeStorageArr", jsonForm);
    render();
})
let ids = [];
function genrateUniqueId (){
    id = Math.floor(Math.random()*10000);
    if(id < 10){
        id = `000${id}`;
    }else if(id <100){
        id = `00${id}`
    }else if (id < 1000){
        id=`0${id}`
    }
    if (ids.indexOf(id) === -1){
        ids.push(id);
        return id;
    }else{
        genrateUniqueId();
    }
}
function Employee (fullName,department,level,imgUrl,salary){
    this.id = genrateUniqueId() ;
    this.fullName = fullName ;
    this.department = department ;
    this.level = level;
    this.imgUrl = imgUrl ;
    this.salary = salary || 0;
}

Employee.prototype.salaryCalculate = function (){
    this.level =this.level.trim().toLowerCase()
    let max , min ;
    if(this.level =="junior"){
        max = 1000;
        min = 500;
    }else if(this.level == "mid-senior"){
        max = 1500;
        min = 1000;
    }else if(this.level == "senior"){
        max = 2000;
        min = 1500;
    }
      this.salary =Math.floor((Math.random()*(max-min))+ min)
    return this.salary;
}
Employee.prototype.netSalaryCalculate = function (salary){
    return salary*0.075
}
let jsEmployeearr;
function render(){
    jsEmployeearr =JSON.parse(localStorage.getItem('employeeStorageArr')|| []);
    document.getElementById('parentSection').innerHTML = '';
    for(let index of jsEmployeearr){
        let newElement = document.createElement("span");
        if (index['department'].trim().toLowerCase()=="administration"){
            newElement.style.order = '1'
            newElement.style.backgroundColor = "#03C988"
        }else if(index['department'].trim().toLowerCase()=="marketing"){
            newElement.style.order = '2'
            newElement.style.backgroundColor = "#A084DC"
        }else if(index['department'].trim().toLowerCase()=="development"){
            newElement.style.order = '3'
            newElement.style.backgroundColor = "#1C82AD"
        }else if(index['department'].trim().toLowerCase()=="finance"){
            newElement.style.order = '4'
            newElement.style.backgroundColor = "#645CBB"
        }
        let idChild = document.createElement('h4');
        let idText = document.createTextNode(`id: ${index['id']}`);
        idChild.appendChild(idText);
        let fullNameChild = document.createElement('h1');
        let fullNameText = document.createTextNode(`Name: ${index['fullName']}`);
        fullNameChild.appendChild(fullNameText);
        let divElm = document.createElement('div');
        divElm.style.height = "200px"
        let imgElement = document.createElement("img")
        imgElement.setAttribute('src',index['imgUrl']);
        divElm.appendChild(imgElement)
        let departmentChild = document.createElement('h4');
        let departmentText = document.createTextNode(`department: ${index['department']}`);
        departmentChild.appendChild(departmentText);
        let levelElement = document.createElement('h4');
        let levelText = document.createTextNode(`Level: ${index['level']}`);
        levelElement.appendChild(levelText);
        let salaryElement = document.createElement('h4');
        let salaryText = document.createTextNode(`salary: ${index['salary']} $`);   
        salaryElement.appendChild(salaryText);
        imgElement.setAttribute('style','width : 200px')
        newElement.appendChild(divElm);
        newElement.appendChild(fullNameChild);
        newElement.appendChild(idChild);
        newElement.appendChild(departmentChild);
        newElement.appendChild(levelElement);
        newElement.appendChild(salaryElement);
        document.getElementById('parentSection').appendChild(newElement);
    }
    }
    
//  let ghazi = new Employee(1000,'Ghazi Samer',"Administration",'Senior','https://user-images.githubusercontent.com/123550658/218242175-dd03e38c-1edc-4246-8f33-8a6529babc25.jpg')
//      ghazi.salary = ghazi.salaryCalculate();
//     ghazi.render()

//     let lana = new Employee('1001','Lana Ali','Finance','Senior','https://user-images.githubusercontent.com/123550658/218241817-55e2b8d0-cfc2-4748-84bb-c7686e4d4b62.jpg')
//     lana.salary = lana.salaryCalculate();
//     lana.render();
    
//     let tamara = new Employee('1002','Tamara Ayoub','Marketing','Senior','https://user-images.githubusercontent.com/123550658/218243161-d1178513-55c6-4097-bd35-106effbb14c7.jpg')
//     tamara.salary = tamara.salaryCalculate()
//     tamara.render();


//     let safi = new Employee ('1003','Safi Walid','administratrion','mid-senior','https://user-images.githubusercontent.com/123550658/218241998-33279af8-a719-48f5-a4bb-4dcb9aa986ae.jpg');
//     safi.salary = safi.salaryCalculate();
//     safi.render();

//     let omar = new Employee('1004','Omar Zaid','Development','Senior','https://user-images.githubusercontent.com/123550658/218243375-8be79a7c-209a-4c76-988b-e77f67c60650.jpg');
//     omar.salary = omar.salaryCalculate();
//     omar.render();

//     let rana = new Employee('1005','Rana Saleh','Development','Junior','https://user-images.githubusercontent.com/123550658/218243455-04d00cfb-0389-4047-bf4f-fc92d08b8cc3.jpg');
//     rana.salary = rana.salaryCalculate();
//     rana.render();

//     let hadi = new Employee('1006','Hadi Ahmad','Finance','mid-senior','https://user-images.githubusercontent.com/123550658/218243916-01df0814-8fc9-47a0-b7ca-d07ec20097e8.jpg')
//     hadi.salary = hadi.salaryCalculate();
//     hadi.render();

  