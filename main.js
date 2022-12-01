
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.table(checkboxes)

let lastChecked;

function handleCheck(e){
// check if SHIFT key is down and if it's being checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => addEventListener('click', handleCheck));

