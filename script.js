function verifyMatchingPasswords() {
    const pw1 = document.getElementById('password');
    const pw2 = document.getElementById('confirm-password');
    if (pw1.value !== pw2.value) {
        document.getElementById('password-check').textContent = "* Passwords do not match."
        pw1.classList.add('invalid');
        pw2.classList.add('invalid');
        return false;
    } else {
        return true;
    }
}