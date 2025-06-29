function validateEmail(email){
    console.log(`Validating email ${email}...`)
};

function validateName(name){
    console.log(`Validating name ${name}`)
}

function validateGender(gender){
    console.log(`Validating gender ${gender}`)
} 

function validateAge(age){
    console.log(`Validating age ${age}`)
}

document.addEventListener("submit",(event)=>{
    event.preventDefault()
    validateEmail("Devanderson95@gmail.com")

})