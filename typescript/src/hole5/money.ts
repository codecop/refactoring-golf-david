import { Incalculable } from ".";

export default class Money {
    value: number;
    currency: string;

    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if (!(other.currency === this.currency)) {
            throw new Incalculable();
        }
        return new Money(this.value + other.value, other.currency);
    }
}