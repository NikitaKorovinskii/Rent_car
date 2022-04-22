export class DataService{

    sum = 0;
    Fio="";
    dateOfBith="";
    phone=7;
    driverNum=0;
    email="";
    password="";

  getData() {
    return this.sum;
  }
  addData(name: number){
    this.sum+=name;
    console.log(this.sum)
  }
  addFio(Fio: string,){
    this.Fio=Fio;
  }
  addDateOfBith(dateOfBith:string,){
    this.dateOfBith+=dateOfBith;
  }
  addDriverNum(driverNum: number){
    this.driverNum+=driverNum;
  }
  addPhone(phone:number){
    this.phone+=phone;
  }
  addEmail(email:string){
    this.email+=email;
  }
  addPassword(password:string){
    this.password+=password;
  }
  getPhone(){
    return this.phone;
  }
  getFio(){
    return this.Fio;
  }
  getDateOfBith(){
    return this.dateOfBith;
  }
  getDriverNum(){
    return this.driverNum;
  }
  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
}
