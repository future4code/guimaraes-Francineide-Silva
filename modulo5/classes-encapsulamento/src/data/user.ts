


export class UserAccount {
    // static getAge() {
    //     throw new Error("Method not implemented.");
    // }
    // static getName() {
    //     throw new Error("Method not implemented.");
    // }
    // static getCpf() {
    //     throw new Error("Method not implemented.");
    // }
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    static getCpf: any;
    static getName: any;
    static getAge: any;
  
    constructor(cpf: string, name: string, age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf():string {
      return this.cpf
  }

  public getName():string {
      return this.name
  }

  public getAge():number{
      return this.age
  }
  
  }

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

  }