'use strict';

const transactionEmitter = require('../services/transactionEmitter');

module.exports = {
    RECEIVE_TRANSACTION: 'RECEIVE_TRANSACTION',

    _receiveTransaction(transaction) {
        console.log('transaction', transaction);
        return {
            type: this.RECEIVE_TRANSACTION,
            transaction
        };
    },

    listenForTransactions(dispatch) {
        transactionEmitter.on('event', t => dispatch(this._receiveTransaction(t)));
    }
};