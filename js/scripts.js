function calendar(){
    var d = new Date ();
    // #create array holding name of months
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth(); //0-11
    var year = d.getFullYear(); //2019
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 4 2019
    var tmp = new Date(first_date).toDateString() 
    //this will create an object store Wed Sept 04 19 and convert to string
    var first_day = tmp.substring(0, 3);
     //Wed
    //create array with first 3 letters of the days
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    // #find the index of first array in day name and store in day num
    var day_no = day_name.indexOf(third_day); //Will return Wed
    //Find the number of days in the current month (must add plus on to get 12)
    var days = new Date(year, month+1, 0).getDate();
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML =  month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);

};
//create a build calendar function passing day number and days as parameters
function get_calendar(day_no, days){
    //return the calendar as a table 
    var table = document.createElement('table');
    //create the first table row
    var tr = document.createElement('tr');

    //row for the single letter of the day
    for(var c=0; c<=6; c++) {
        //create table data element inside the for loop
        var td = document.createElement('td');
        // take the string and access the element of the stringy array via loop 
        // w ea iteration of the loop an element of the array "SMT.." is accessed and 
        // ssigned to table data 
        td.innerHTML = "SMTWTFS"[c];
        //append table data to table row
        tr.appendChild(td);
    };
    //when the loop ends the table row is assigned to the table 
    table.appendChild(tr);
//create a second row for the numbers and a second for loop to access the array of numbers 
    tr = document.createElement('tr');
    var c;
    for (var c=0; c<=6; c++){
        //break out of for loop when i == to day_no
            if(i == day_no){
            break;
        }
        //if i is not == to day_no the createElement td
        var td = document.createElement('td');
        //assign td html to empty space 
        td.innerHTML = "";
        //append blank space to table row
        tr.appendChild(td);
    };
//create varable count and set it to one to count the number of days that 
//have nbeen printed
    var count = 1;
    for (; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    };
    table.appendChild(tr);

    for (var r=3; r<=6; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            };
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
};

window.onload = calendar();
};