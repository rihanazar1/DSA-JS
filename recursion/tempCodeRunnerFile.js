let counter  = 1
function demo(number){
    if(counter > number){
        return
    }

    console.log("like" + " " +counter)
    counter++
    demo(number)
}
demo(5)