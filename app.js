'use strict'

function Employee (id,fullName,department,level,imgUrl,salary){
    this.id = id ;
    this.fullName = fullName ;
    this.department = department ;
    this.level = level;
    this.imgUrl = imgUrl ;
    this.salary = salary;
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
     let salary =Math.floor((Math.random()*(max-min))+ min)
    return salary;
}
Employee.prototype.netSalaryCalculate = function (salary){
    return salary*0.075
}

Employee.prototype.render = function (){
    let sectionCount = document.getElementsByTagName('section').length;
    let spanCount = document.getElementsByTagName('span').length;
    let parentSection;
      if(spanCount == (5*sectionCount)){
        parentSection = document.createElement('section')
        document.getElementById('main').appendChild(parentSection)
    }else{
        parentSection=document.getElementsByTagName('section')[sectionCount-1];
    }
    let newElement = document.createElement("span");
        let idChild = document.createElement('h4');
        let idText = document.createTextNode(`id: ${this.id}`);
        idChild.appendChild(idText);
        let fullNameChild = document.createElement('h1');
        let fullNameText = document.createTextNode(`Name: ${this.fullName}`);
        fullNameChild.appendChild(fullNameText);
        let imgElement = document.createElement("img")
        let departmentChild = document.createElement('h4');
        let departmentText = document.createTextNode(`department: ${this.department}`);
        departmentChild.appendChild(departmentText);
        let levelElement = document.createElement('h4');
        let levelText = document.createTextNode(`Level: ${this.level}`);
        levelElement.appendChild(levelText);
        let salaryElement = document.createElement('h4');
        let salaryText = document.createTextNode(`salary: ${this.salary}$`);
        salaryElement.appendChild(salaryText);
        imgElement.setAttribute('src',this.imgUrl);
        imgElement.setAttribute('style','width : 200px')
        newElement.appendChild(imgElement);
        newElement.appendChild(fullNameChild);
        newElement.appendChild(idChild);
        newElement.appendChild(departmentChild);
        newElement.appendChild(levelElement);
        newElement.appendChild(salaryElement);
        parentSection.appendChild(newElement);
    }
    
 let ghazi = new Employee(1000,'Ghazi Samer',"Administration",'Senior','https://user-images.githubusercontent.com/123550658/218242175-dd03e38c-1edc-4246-8f33-8a6529babc25.jpg')
     ghazi.salary = ghazi.salaryCalculate();
    ghazi.render()

    let lana = new Employee('1001','Lana Ali','Finance','Senior','https://user-images.githubusercontent.com/123550658/218241817-55e2b8d0-cfc2-4748-84bb-c7686e4d4b62.jpg')
    lana.salary = lana.salaryCalculate();
    lana.render();
    
    let tamara = new Employee('1002','Tamara Ayoub','Marketing','Senior','https://user-images.githubusercontent.com/123550658/218243161-d1178513-55c6-4097-bd35-106effbb14c7.jpg')
    tamara.salary = tamara.salaryCalculate()
    tamara.render();


    let safi = new Employee ('1003','Safi Walid','administratrion','mid-senior','https://user-images.githubusercontent.com/123550658/218241998-33279af8-a719-48f5-a4bb-4dcb9aa986ae.jpg');
    safi.salary = safi.salaryCalculate();
    safi.render();

    let omar = new Employee('1004','Omar Zaid','Development','Senior','https://user-images.githubusercontent.com/123550658/218243375-8be79a7c-209a-4c76-988b-e77f67c60650.jpg');
    omar.salary = omar.salaryCalculate();
    omar.render();

    let rana = new Employee('1005','Rana Saleh','Development','Junior','https://user-images.githubusercontent.com/123550658/218243455-04d00cfb-0389-4047-bf4f-fc92d08b8cc3.jpg');
    rana.salary = rana.salaryCalculate();
    rana.render();

    let hadi = new Employee('1006','Hadi Ahmad','Finance','mid-senior','https://user-images.githubusercontent.com/123550658/218243916-01df0814-8fc9-47a0-b7ca-d07ec20097e8.jpg')
    hadi.salary = hadi.salaryCalculate();
    hadi.render();

  