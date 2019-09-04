window.onload = function(){
    var d = new Date ();
    // #create array holding name of months
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth(); //0-11
    var year = d.getFullYear(); //2019
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 4 2019
    var tmp = new Date(first_date).toDateString() 
    //this will create an object store Wed Sept 04 19 and convert to string
    var first_day = tmp.substring(0, 3); //Wed
    //create array with first 3 letters of the days
    var day_name = ['Sun', 'Mon', ]
}