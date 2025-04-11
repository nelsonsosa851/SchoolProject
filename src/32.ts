class MyClass {
    private _privateField: number;

    constructor(public readonly publicField: number) {}

    public get privateField(): number {
        return this._privateField;
    }

    public set privateField(value: number) {
        if (value < 0 || value > 100) {
            throw new Error("Value must be between 0 and 100.");
        }
        this._privateField = value;
    }

    public get publicField(): number {
        return Math.floor(Math.random() * 50);
    }
}
