// const form = document.getElementById('myForm');
const steps = document.querySelectorAll('.step');
const forms = document.querySelectorAll('.form-section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 0;

nextBtn.addEventListener('click' , ()=>{
    currentStep++
    steps[currentStep].classList.remove('inactive') ; 
    forms[currentStep-1].classList.add('hide')
    forms[currentStep].classList.remove('hide')
})
prevBtn.addEventListener('click' , ()=>{
    if (currentStep > 0) {
        steps[currentStep].classList.add('inactive'); 
        forms[currentStep-1].classList.remove('hide')
        forms[currentStep].classList.add('hide')
        currentStep--;
    }
    return;
})

const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')
const formData = new FormData(form, submitBtn);
submitBtn.addEventListener("click" ,()=>{
    for (const [key, value] of formData) {
        console.log(key , value)
      }
})







// prevBtn.addEventListener('click', () => {
//     currentStep--;
//     showStep(currentStep);
// });

// function showStep(n) {
//     steps.forEach((step, index) => {
//         step.classList.toggle('inactive', index === n);
//     });
//     prevBtn.disabled = n === 0;
//     nextBtn.disabled = n === steps.length - 1;
// }

// nextBtn.addEventListener('click', () => {
//     currentStep++;
// });

// submitBtn.addEventListener('click', () => {
//     console.log('done')
// });
