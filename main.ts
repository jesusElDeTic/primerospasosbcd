input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randint(0, 9))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("JESUS")
})
basic.showArrow(ArrowNames.West)
basic.pause(200)
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    }
})
