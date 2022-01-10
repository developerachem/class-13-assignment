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


function weeck2 (day) {
    if( day === 0 ){
        return 'Sun'
    }else if( day === 1 ){
        return 'Mon'
    }else if( day === 2 ){
        return 'Tue'
    }else if( day === 3 ){
        return 'Wed'
    }else if( day === 4 ){
        return 'Thu'
    }else if( day === 5 ){
        return 'Fri'
    }else if( day === 6 ){
        return 'Sat'
    }
}
/**
 * Month Function
 * @param {*} month 
 * @returns 
 */
function monthCal (month) {
    if( month === 0 ){
        return 'Jan'
    }else if( month === 1 ){
        return 'Feb'
    }else if( month === 2 ){
        return 'Mar'
    }else if( month === 3 ){
        return 'Apr'
    }else if( month === 4 ){
        return 'May'
    }else if( month === 5 ){
        return 'Jun'
    }else if( month === 6 ){
        return 'Jul'
    }else if( month === 7 ){
        return 'Agu'
    }else if( month === 8 ){
        return 'Sep'
    }else if( month === 9 ){
        return 'Oct'
    }else if( month === 10 ){
        return 'Nov'
    }else if( month === 11 ){
        return 'Dec'
    }
}
