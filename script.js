function verifyMatchingPasswords() {
    const pw1 = document.getElementById('password').value;
    const pw2 = document.getElementById('confirm-password').value;
    if (pw1 !== pw2) {
        document.getElementById('password-check').textContent = "* Passwords do not match."
        return false;
    } else {
        return true;
    }
}