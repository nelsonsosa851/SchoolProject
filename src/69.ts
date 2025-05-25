class MyClass {
  public constructor() {
    this.message = "Hello from MyClass";
  }

  static async getMessage(): Promise<string> {
    return `MyClass ${this.message}`;
  }
}

console.log(MyClass.getMessage());
