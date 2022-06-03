//Create a function that takes two dates and returns the number of days between the first and second date.


// answer without commas

// let date1 = 'June 14 2019';
// let date2 = 'June 20 2019';
// let result;

// function getDays(date1,date2){
//     dateArr = date1.split(" ");
//     dateArr2 = date2.split(" ")
//     return Math.abs(Number(dateArr[1] - dateArr2[1]));
// }
//     console.log(getDays(date1,date2));



    // answer with "/"

    let date1 = "06/14/2019";
    let date2 = "06/20/2019";

    function getDays(date1,date2){
            dateArr = date1.split("/");
            dateArr2 = date2.split("/")

            return Math.abs(Number(dateArr[1] - dateArr2[1]));
        }

        //console.log(getDays(date1))
        console.log(getDays(date1,date2))