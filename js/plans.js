const monthly = document.getElementById('monthly');
const annual = document.getElementById('annual');
const monthlyPlans = document.querySelector('.plans-description .plans-monthly');
const annualPlans = document.querySelector('.plans-description .plans-annual');

function togglePlansDisplay(show, hide) {
    hide.style.display = 'none';
    hide.style.visibility = 'hidden';
    show.style.display = 'inherit';
    show.style.visibility = 'visible';
}

function togglePlansOpacity(planShow, planHide) {
    planHide.classList.toggle('opacity-total');
    planHide.classList.toggle('opacity-medium');
    planShow.classList.toggle('opacity-medium');
    planShow.classList.toggle('opacity-total');
}

function switchPlans() {
    annual.classList.toggle('button-plans-active');
    monthly.classList.toggle('button-plans-active');
    
    setTimeout(() => {
        togglePlansOpacity(annualPlans, monthlyPlans);
    }, 500);
}

annual.addEventListener('click', () => {
    if (annualPlans.classList.contains('opacity-total')) return;

    togglePlansDisplay(annualPlans, monthlyPlans);
    switchPlans();
});

monthly.addEventListener('click', () => {
    if (monthlyPlans.classList.contains('opacity-total')) return;

    togglePlansDisplay(monthlyPlans, annualPlans);
    switchPlans();
});





