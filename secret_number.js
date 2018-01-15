// 'use strict';
module.exports = function(){
    let randNumber = Math.random();
    return function (){
        return randNumber;
    };
};  