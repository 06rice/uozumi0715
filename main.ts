basic.forever(function () {
    if (led.brightness() < 40) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
