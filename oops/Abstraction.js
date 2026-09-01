class CoffeeMachine {
    #heatWater() { console.log("Water heating..."); }
    #brewCoffee() { console.log("Brewing Coffe..."); }

    makeCoffee() {
        this.#heatWater();
        this.#brewCoffee();
        console.log("Yout Coffee is Ready");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee();