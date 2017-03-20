let translations = require("./pt-br.json"),
    chalk = require(`chalk`);

class I18n {
    constructor(locale="en") {
        this.setLocale(locale);
    }

    setLocale(l) {
        this.locale = l;
        // load translation file
        this.dictionary = require(`./${this.locale}.json`)
    }

    translate(key) {
        return this.dictionary[key] || false;
    }
}

class Logger {
    constructor(val) {
        this.parent = val;
    }

    info(msg, type) {
        switch(type) {
            case "warning":
                console.log(`${chalk.yellow(msg)}`);
                break;

            case "danger":
                console.log(`${chalk.red(msg)}`);
                break;

            case "success":
            default:
                console.log(`${chalk.green(msg)}`);
        }
    }
}

let utils = {
}

module.exports = {
    utils:  utils,
    I18n:   I18n,
    Logger:   Logger
};
