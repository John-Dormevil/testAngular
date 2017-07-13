export class Hero {
    private id: number;
    private name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setId(id: number): void {
        this.id = id;
    }
}
