//let date = new Date();

/**
 * This Is Zero Add Function
 * @param {*} time 
 * @returns 
 */
function zeroAdd(time) {
    if (time < 10) {
        return `0${time}`
    }else{
        return `${time}`
    }
}

/**
 * This Is AM PM Cal function 
 * @param {*} time 
 * @returns 
 */
function amPmCal (time) {
    if( time > 12 ){
        return 'PM'

    }else{
        return 'AM'
    }
}


/**
 * This Is Weeck Function
 * @param {*} day 
 * @returns 
 */
function weeck (day) {
    if( day === 0 ){
        return 'Sunday'
    }else if( day === 1 ){
        return 'Monday'
    }else if( day === 2 ){
        return 'Tuesday'
    }else if( day === 3 ){
        return 'Wednesday'
    }else if( day === 4 ){
        return 'Thursday'
    }else if( day === 5 ){
        return 'Friday'
    }else if( day === 6 ){
        return 'Saturday'
    }
}
