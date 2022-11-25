function printHello(){
  console.log('hello')
}

//hello world will print after 2 seconds
var t =setTimeout(printHello,2000)

//clear the time of previous timer
clearTimeout(t);
