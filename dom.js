let currency = ''
let amount = 0
const input1 = document.querySelector('.input1[type = number]')


const h3 = document.querySelector('h3')
const radios = document.querySelectorAll('input[type = radio]')


const btn = document.querySelector('.btn')
// console.log(btn)

// const exchange = async (curr)=>{
//     const api = await fetch(`https://api.frankfurter.app/latest?from=${curr}`)
//     const res = await api.json()
//     return res.rates
// }
const exchange = async (curr)=>{
    const api = await fetch(`https://api.frankfurter.app/latest?from=${curr}`)
    const res = await api.json()
    return res.rates
// console.log(res.rates)
}

radios.forEach(radio=>radio.addEventListener('change', function(){
    currency = radio.value
}))

input1.addEventListener('change', ()=>{
    amount = Number(input1.value)
})

btn.addEventListener('click', async()=>{
    if(!amount || !currency) return alert('invalid')
    const unit = currency === "USD"?"ZAR":"USD"
const response = await exchange(currency) 
const result = amount * response[unit]

h3.innerText = `The value of ${amount} ${currency} is ${result.toFixed(2)} ${unit}`

} 
)











