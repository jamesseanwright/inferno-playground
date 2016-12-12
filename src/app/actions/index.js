'use strict';

const START_CHAR = 32;
const END_CHAR = 1032;

const codes = getCodes();

function getCodes() {
    const chars = new Array(END_CHAR - START_CHAR);

    for (let i = START_CHAR; i <= END_CHAR - START_CHAR; i++) {
        chars[i] = i;
    }

    return chars;
}

module.exports = {
    FETCH_CODES: 'FETCH_CODES',

    fetchCodes() {
        return {
            type: this.FETCH_CODES,
            codes
        };
    }
};