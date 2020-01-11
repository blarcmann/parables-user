import toaster from "toasted-notes";

const globals = {
    capitalize: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    },
    base_url: 'http://142.93.6.250/v1',
    tokens: JSON.parse(localStorage.getItem('activationTokens')),
    createToast: function (text, timeLeft, position) {
        return toaster.notify(text, {
            position: position,
            duration: timeLeft
        });
    },
    getFirstChar: function(string) {
        if(string && string.length) {
            return string.charAt(0).toUpperCase();
        } else {
            return 'X'
        }
    }
}

export default globals;