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

function onStorageUpdate(evt) {
    const name = evt.key;
    document.querySelectorAll(`input[type="checkbox"][name="${name}"]`).forEach(el => {
        el.checked = evt.newValue == "true";
    });
}

document.addEventListener("DOMContentLoaded", onReady);
window.addEventListener("storage", onStorageUpdate);