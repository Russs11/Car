class Car {
    constructor(steeringWheel, startBtn, headlightsBtn, driveBrake, turnSignalBtn) {
        this.steeringWheel = steeringWheel
        this.startBtn = startBtn
        this.headlightsBtn = headlightsBtn
        this.driveBrake = driveBrake
        this.turnSignalBtn = turnSignalBtn
    }
    startCar() {
        this.startBtn.toggleOnOf()
    }
    toggleLights() {
        this.headlightsBtn.toggleOnOf()
    }
    toggleTurnSignal() {
        this.turnSignalBtn.toggleLeft()
    }
}
class StartBtn {
    constructor(engine) {
        this.onOf = false
        this.engine = engine
    }
    toggleOnOf() {
        this.onOf = !this.onOf;
        this.engine.toggleEngine()
    }
}
class HeadLightsBtn {
    constructor(headlights) {
        this.onOf = false
        this.headlights = headlights
    }
    toggleOnOf() {
        this.onOf = !this.onOf;
        this.headlights.toggleOnOf()
    }
}
class TurnSignalsBtn {
    constructor(turnSignals) {
        this.onOf = false
        this.turnSignals = turnSignals
    }
    toggleLeft() {
        this.onOf = !this.onOf;
        this.turnSignals.toggleLeft()
    }
}
class Engine {
    constructor(wheelsArr) {
        this.onOf = false
        this.wheelsArr = wheelsArr
    }
    toggleEngine() {
        this.onOf = !this.onOf;
        this.onOf ? console.log("двигатель запущен") : console.log("двигатель остановлен")
        // this.wheelsArr.forEach((item) => { item.toggleRotate() })
    }
    getEngineState() {
        return this.onOf
    }
}
class DriveBrake {
    wheelsArr;
    constructor(wheelsArr, engine) {
        this.driveBrake = false
        this.wheelsArr = wheelsArr
        this.engine = engine

    }
    DriveBrake(value) {

        if (value === "Drive" && this.engine.getEngineState() === true) {
            console.log("газ")
            this.wheelsArr.forEach((item) => {
                if (item.getRotate() === false)
                    item.toggleRotate()
            })

        } else if (value === "Drive" && this.engine.getEngineState() === false) {
            alert("двигатель не запущен")


        } else {
            console.log("тормоз");
            this.wheelsArr.forEach((item) => {
                if (item.getRotate() === true)
                    item.toggleRotate()
            })
        }
    }
}
class Wheel {
    wheelsPosition = "forward";
    constructor(isFront) {
        this.rotate = false
        this.isFrontWheel = false
        isFront ? this.isFrontWheel = true : null
    }
    toggleRotate() {
        this.rotate = !this.rotate;
        let message = `${this.isFrontWheel ? "Передние " : "Задние "} ${this.rotate ? "колеса крутятся" : "колеса не крутятся"}`
        console.log(message);

    }
    wheelsTurnRight() {
        if (this.isFrontWheel === true) {
            console.log("колеса поворачивают вправо")
            this.wheelsPosition = "right"
        }
    }
    wheelsTurnLeft() {
        if (this.isFrontWheel === true) {
            console.log("колеса поворачивают влево")
            this.wheelsPosition = "left"
        }
    }
    wheelsTurnForward() {
        if (this.isFrontWheel === true) {
            console.log("колеса направлены прямо")
            this.wheelsPosition = "forward"
        }
    }
    getIsFrontWheel() {
        return this.isFrontWheel
    }
    getRotate() {
        return this.rotate
    }

}
class Headlights {
    constructor(light1, light2) {
        this.onOf = false
        this.light1 = light1
        this.light2 = light2
    }
    toggleOnOf() {
        if (this.onOf === false) {
            this.onOf = true
            console.log("Фары горят")
            this.light1.classList.add('lights-active')
            this.light2.classList.add('lights-active')
        } else {
            this.onOf = false
            console.log("Фары не горят")
            this.light1.classList.remove('lights-active')
            this.light2.classList.remove('lights-active')
        }
    }
}

class TurnSignals {
    constructor(leftSignal, rightSignal) {
        this.onOf = false
        this.leftSignal = leftSignal
        this.rightSignal = rightSignal

    }
    toggleLeft() {
        if (this.onOf === false) {
            this.onOf = true
            console.log("левый поворотник мигает")
            this.leftSignal.classList.add('left-signal-active')
        }
        else {
            this.onOf = false
            console.log("левый поворотник не мигает")
            this.leftSignal.classList.remove('left-signal-active')
        }
    }
    toggleRight() {
        if (this.onOf === false) {
            this.onOf = true
            this.rightSignal.classList.add('right-signal-active')
            console.log("правый поворотник мигает");
        } else {
            this.onOf = false
            console.log("правый поворотник не мигает");
            this.rightSignal.classList.remove('right-signal-active')
        }
    }
    getToggleOnOf() {
        return this.onOf
    }
    setToggleOnOf(value) {
        this.onOf = value
    }
}
class StearingWheel {
    stearingWheelState;
    wheelsArr;
    constructor(wheelsArr) {
        this.stearingWheelState = "lookForward"
        this.wheelsArr = wheelsArr

    }
    stearingWheelTurn(way) {
        if (way === "Right") {
            this.stearingWheelState = "lookRihgt"
            this.wheelsArr.forEach(item => {
                item.wheelsTurnRight()
            })
        }
        if (way === "Left") {
            this.stearingWheelState = "lookLeft"
            this.wheelsArr.forEach(item => {
                item.wheelsTurnLeft()
            })
        }
        if (way === null) {
            this.stearingWheelState = "lookForward"
            this.wheelsArr.forEach(item => {
                item.wheelsTurnForward()
            })
        }

    }
}
class Wheel2 {
    wheelsArr
    constructor(arr) {
        this.wheelsArr = arr
    }

    getWheelsArr() {
        return this.wheelsArr;
    }
    setWheelsArr(value) {
        this.wheelsArr = value;
    }
    turnWheelsRight() {
        this.wheelsArr.forEach(item => {
            item.classList.add('wheel-right')
        })
    }
    turnWheelsLeft() {
        this.wheelsArr.forEach(item => {
            item.classList.add('wheel-left')
        })
    }
}
class Wheel3 {
    wheel
    constructor(wheel) {
        this.wheel = wheel
    }

    getWheel() {
        return this.wheel;
    }
    setWheel(value) {
        this.wheel = value;
    }
    turnWheelRight() {
        this.wheel.classList.remove('wheel-left')
        this.wheel.classList.add('wheel-right')
    }
    turnWheelLeft() {
        this.wheel.classList.remove('wheel-right')
        this.wheel.classList.add('wheel-left')
    }
}

const wheelsArrView = document.querySelectorAll('.wheel')
// const w = new Wheel2(wheelsArrView)
// const w2 = new Wheel2(wheelsArrView)
// const w3 = new Wheel3(wheelsArrView[1])
// w.turnWheelsRight()
// setTimeout(() => {
//     w2.turnWheelsLeft()    
// }, 1000)
// setTimeout(() => {
//     w3.turnWheelRight()    
// }, 2000)
const leftSignal = document.querySelector('.left-signal')
const rightSignal = document.querySelector('.right-signal')
const stearingWheelView = document.querySelector('.stearing-wheel')
const l1 = document.querySelector('.lights1')
const l2 = document.querySelector('.lights2')
const toggleLights = document.querySelector('.light-btn')
const startCarbtn = document.querySelector('.start-stop')
const engineview = document.querySelector('.engine')

// console.log({ stearingWheelView });

const wheels = [new Wheel(true), new Wheel(true), new Wheel(false), new Wheel(false)]
const engine = new Engine()
const driveBrake = new DriveBrake(wheels, engine)
const btn = new StartBtn(engine)
const headlights = new Headlights(l1, l2)
const turnSignals = new TurnSignals(leftSignal, rightSignal)
const lightBtn = new HeadLightsBtn(headlights)
const car = new Car("", btn, lightBtn,)
const stearWheel = new StearingWheel(wheels)


toggleLights.addEventListener("click", () => {
    // console.log("клик");
    toggleLights.classList.toggle("light-btn-active")
    car.toggleLights()
    console.log(toggleLights.classList);
})
startCarbtn.addEventListener("click", () => {
    startCarbtn.classList.toggle("start-stop-active")
    car.startCar()
    engineview.classList.toggle("engine-active")

})

document.addEventListener("keydown", (event) => {
    console.log({ event });

    if (event.key === "ArrowRight") {
        stearingWheelView.style.transform = 'rotate(' + 45 + 'deg)';
        stearWheel.stearingWheelTurn("Right")
        wheelsArrView[0].classList.remove("wheel-left")
        wheelsArrView[1].classList.remove("wheel-left")
        wheelsArrView[0].classList.add("wheel-right")
        wheelsArrView[1].classList.add("wheel-right")


        // console.log("колеса повернули направо", stearWheel)

    }
    if (event.key === "ArrowLeft") {
        stearingWheelView.style.transform = 'rotate(' + (-45) + 'deg)';
        stearWheel.stearingWheelTurn("Left")
        wheelsArrView[0].classList.remove("wheel-right")
        wheelsArrView[1].classList.remove("wheel-right")
        wheelsArrView[0].classList.add("wheel-left")
        wheelsArrView[1].classList.add("wheel-left")
        // console.log("колеса повернули налево", stearWheel)

    }
    if (event.key === "w" || event.key === "ц") {
        driveBrake.DriveBrake("Drive")
        // console.log(driveBrake)
    }
    if (event.key === "s" || event.key === "ы") {
        driveBrake.DriveBrake("Brake")
        // console.log(driveBrake)
    }
})

document.addEventListener("keydown", (event) => {
    // let blink = null
    if (event.key === "a" || event.key === "ф" && turnSignals.getToggleOnOf() === false) {

        turnSignals.toggleLeft()
        blink = setInterval(() => leftSignal.classList.toggle("left-signal-active"), 500)
        // car.toggleTurnSignal()

    } else if (turnSignals.getToggleOnOf() === true && event.key === "q" || event.key === "й") {
        clearInterval(blink);
        turnSignals.toggleLeft()
        turnSignals.setToggleOnOf(false)
        console.log('turnSignals.getToggleOnOf(): ', turnSignals.getToggleOnOf());
        console.log('clearInterval(blink): ', clearInterval(blink));
    }

    if (event.key === "d" || event.key === "в") {
        turnSignals.toggleRight()
        blink = setInterval(() => rightSignal.classList.toggle("right-signal-active"), 500)
        // car.toggleLights()
        // console.log(toggleLeft.classList);

    } else if (turnSignals.getToggleOnOf() === true && event.key === "e" || event.key === "у") {
        clearInterval(blink)
        turnSignals.toggleRight()
        turnSignals.setToggleOnOf(false)
    }
})
document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        stearingWheelView.style.transform = 'rotate(' + 0 + 'deg)';
        stearWheel.stearingWheelTurn(null)
        wheelsArrView[0].classList.remove("wheel-left")
        wheelsArrView[1].classList.remove("wheel-left")
        wheelsArrView[0].classList.remove("wheel-right")
        wheelsArrView[1].classList.remove("wheel-right")

        // console.log("колеса повернули направо", stearWheel)
    }
    if (event.key === "ArrowLeft") {
        stearingWheelView.style.transform = 'rotate(' + 0 + 'deg)';
        stearWheel.stearingWheelTurn(null)
        wheelsArrView[0].classList.remove("wheel-left")
        wheelsArrView[1].classList.remove("wheel-left")
        wheelsArrView[0].classList.remove("wheel-right")
        wheelsArrView[1].classList.remove("wheel-right")


        // console.log("колеса повернули направо", stearWheel)
    }
})



