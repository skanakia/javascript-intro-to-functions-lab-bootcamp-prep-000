var uppercase = "HELLO!"
var lowercase = "hello!"
var mixedcase = "Hi there!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    console.log("I can't hear you") 
  } else if (string === "I love you, Grandma.") {
    console.log("I love you, too.")
  } else if (string.toUpperCase === string) {
    console.log("YES INDEED!")
  } else {
    console.log("Hi Grandma!")
  }
}