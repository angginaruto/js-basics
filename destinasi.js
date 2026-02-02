import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log("Hello AI")
function greet(name){
    console.log(`Halo ${name} selamat pagi`)
}

const nama = prompt("Masukan nama Anda : ")
greet(nama)