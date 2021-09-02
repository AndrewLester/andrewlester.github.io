const emailReplacements = {
    'AT' : '@',
    'DOT': '.',
};
const email = document.getElementById('email-link');

for (let replacer in emailReplacements) {
    const replacement = emailReplacements[replacer];
    email.href = email.href.replace(replacer, replacement);
}
