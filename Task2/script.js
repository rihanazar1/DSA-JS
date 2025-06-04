function sendAutoEmail(to){
    return function (subject){
        return function (body) {
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
        }
    }
}

let step1 = sendAutoEmail("rihanazhar5@gmail.com")
step1()
