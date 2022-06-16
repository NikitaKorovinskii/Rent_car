export class DataService{

    token = "";
    walletSum =0;
    sum = 0;
    payCar=0;
    idCar=0;
    newSum=0;
    Tech: [{ IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0 }] = [{IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0}];
    cars:[{IdCar:0, NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'',ImgCar:'',Horsepower:0,Engine:0}]=[{ IdCar:0,NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'' ,ImgCar:'',Horsepower:0,Engine:0}];
    PriceCar=0;

  tripsDate:[{ StartDate: '', EndDate: ''}]=[{StartDate: '', EndDate: '' }];

  addCars(cars:[{IdCar:0, NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'',ImgCar:'',Horsepower:0,Engine:0}]=[
      { IdCar:0,NameCar: '', PriceCar: 0, BodyType: '',CountSeats:0,Transmission:'' ,ImgCar:'',Horsepower:0,Engine:0}]){
    this.cars = cars;
    }
  addTech(tech:[{IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0}]=[
    { IdInspection: 0, DateOfPassage: '', Description: '', IdCar: 0}]){
    this.Tech =tech ;
  }
  getTech(){
    return this.Tech;
  }
    getCars(){
      return this.cars;
    }

  addTrip(cars:[{StartDate: '', EndDate: ''}]=[
    { StartDate: '', EndDate: ''}]){
    this.tripsDate = cars;
  }
  getTrip(){
    return this.tripsDate;
  }

    addPayCar(payofCar: number){
      this.payCar = payofCar;
      this.sum= this.sum - this.payCar;
      console.log(this.sum)
    }
  getIdCar() {
    return this.idCar;
  }
  addIdCar(idCar: number){
    this.idCar =idCar;
  }
  getData() {
    return this.sum;
  }
  addWalletSum(WalletSum: number){
    this.walletSum =WalletSum;
  }
  getWalletSum() {
    return this.walletSum;
  }
  getPriceCar() {
    return this.PriceCar;
  }
  addPriceCar(PriceCar: number){
    this.PriceCar =PriceCar;
  }

  addNewSum(parse: number) {
    this.newSum=parse;
  }
  getNewSum(){
    return this.newSum;
  }
  addToken(token: string){
    this.token =token;
  }
  getToken() {
    return this.token;
  }
}
