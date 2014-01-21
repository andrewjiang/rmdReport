$(document).ready(function(){
    $('#recipientList').dataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "aaSorting": [[ 3, "desc" ]]
    })
});