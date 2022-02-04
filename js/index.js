const emailReplacements = {
    AT: '@',
    DOT: '.',
};
const emails = document.getElementsByClassName('email-link');

for (const email of emails) {
    for (const replacer in emailReplacements) {
        const replacement = emailReplacements[replacer];
        email.href = email.href.replace(replacer, replacement);
    }
}
