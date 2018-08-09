
$(function () {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    } );
} );



$(function () {
    $('#datepicker1').datepicker({ dateFormat: 'm/d/yy' });
});


$(function () {
    $('#timepicker1').timepicker({ 'scrollDefault': 'now' });
    $('#scrollDefaultExample').timepicker({ 'scrollDefault': 'now' });

    $('#setTimeExample').timepicker();
    $('#setTimeButton').on('click', function (){
        $('#setTimeExample').timepicker('setTime', new Date());
    });
});
