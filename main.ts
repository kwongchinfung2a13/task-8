let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    led.plot(0, y)
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            y += 1
        }
        y = 0
        x += 1
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    led.plot(x, y)
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            x += 1
            basic.pause(100)
        }
        y += 1
        for (let index = 0; index < 5; index++) {
            x += -1
            led.plot(x, y)
            basic.pause(100)
        }
        y += 1
    }
})
input.onButtonPressed(Button.B, function () {
    led.plot(x, 0)
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            x += 1
        }
        x = 0
        y += 1
    }
    basic.clearScreen()
})
