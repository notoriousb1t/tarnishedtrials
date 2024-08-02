function onReady() {
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
       const name = el.name;
       const value = localStorage.getItem(name) == "true";
       el.checked = value;
       el.addEventListener('change', onChallengeChange);
    });
}

function onChallengeChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.checked;
    localStorage.setItem(name, value);
}

document.addEventListener("DOMContentLoaded", onReady);