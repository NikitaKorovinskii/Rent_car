export class DataService{

    sum = 0;
    Fio="";
    dateOfBith="";
    phone="7";
    driverNum="";
    email="";
    password="";
    payCar=0;

    addPayCar(payofCar: number){
      this.payCar = payofCar;
      this.sum= this.sum - this.payCar;
      console.log(this.sum)
    }

  getData() {
    return this.sum;
  }
  addData(name: number){
    this.sum+=name;
    console.log(this.sum)
  }
  addFio(Fio: string,){
    this.Fio=Fio;
    console.log(Fio)
  }
  addDateOfBith(dateOfBith:string,){
    this.dateOfBith+=dateOfBith;
  }
  addDriverNum(driverNum: string){
    this.driverNum+=driverNum;
  }
  addPhone(phone:string){
    this.phone=phone;
  }
  addEmail(email:string){
    this.email=email;
  }
  addPassword(password:string){
    this.password=password;
  }
  getPhone(){
    return this.phone;
  }
  getFio(){
    return this.Fio;
    console.log(this.Fio)
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
