import PromptSync from "prompt-sync"
const prompt = PromptSync()

const destinasi = prompt("Masukan nama destinasi : ")
const jarak_kilometer = Number(prompt("Masukan jarak ke destinasi dalam kilometer : "))
const kecepatan = Number(prompt("Masukan kecepatan kendaraan dalam km/jam : "))

function menuju_destinasi(destinasi, jarak_kilometer, kecepatan){
    const sampai_dalam = jarak_kilometer/kecepatan
    console.log(`Maka Anda akan sampai ke ${destinasi} dalam waktu ${sampai_dalam} jam`)
}

menuju_destinasi(destinasi, jarak_kilometer, kecepatan)