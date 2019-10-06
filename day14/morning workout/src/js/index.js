// In Czech, every person gets a national identification number (NID) when they are born. The rules for producing a correct NID are as follows:

// The format is YYMMDDXXXX, for example 7561142468.
// First two digits are the last two digits of the year of birth
// Second two digits are the month of birth. If the person is female, number 50 gets added to the month.
// Third two digits are the day of birth.
// Last four digits is an arbitrary number to make the ID unique.
// The number needs to be divisible by 11.
// From the example 7561142468 you can tell that the person is a woman born on 14. november 1975.


const nid = prompt('Enter your NID')


const daysInMonth = [ null, 31, 29,]
const nidIsValid = (nid) => {
    const intNID = parseInt(nid, 10);
    if (Number.isNaN(intNID)) {
        return false;
    }
    
    if (intNID < 1000000000 || intNID > 9999999999) {
        return false;
    }
    
    if (nid % 11 !== 0) {
        return false;
    }
    
    const month = parseInt(nid[2] + nid[3]), 10);
    if (month > 51) {
        if (month < 1 || month > 12) {
            return false;
        }
    } else if (month > 62) {
        return false;
    }

    const day = parseInt(nid[4] + nid[5], 10);
    if (day < 1 || day > daysInMOnth[month]) {
        return false;
    }

    const year = parseInt(nid[0] + nid[1], 10);
    if (year % 4 !==0 && month === 2 && day ==== 29) {
        return false;
    }
}
h

