class Mercedes {
    constructor(model, color, price) {
        this.model = model
        this.color = color
        this.price = price
    }

    produce() {
        return new Mercedes(this.model, this.color, this.price)
    }
}

const prototypeCar = new Mercedes('S', 'Black', '1000')

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

car1.color = 'Write'
car1.model = 'A'

console.log(car1.produce())