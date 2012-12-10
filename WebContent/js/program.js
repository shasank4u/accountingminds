var JTable = function() {};
JTable.Setup = function() {
	alert("text");
	
    var table = $('.jtable');
    alert(table);
    
    $('caption', table).addClass('ui-state-default');
    $('th', table).addClass('ui-state-default');
    $('td', table).addClass('ui-widget-content');
    $(table).delegate('tr', 'hover', function() {
        $('td', $(this)).toggleClass('ui-state-hover');
    });
    $(table).delegate('tr', 'click', function() {
        $('td', $(this)).toggleClass('ui-state-highlight');
    });
};

JTable.SetupNewRows = function(rows) {
    $(rows).find('td').addClass('ui-widget-content');
};
$(function() {
    JTable.Setup();
    var newRows = $('<tr><td>b1</td><td>b2</td><td>b3</td><td>b4</td></tr>');
    JTable.SetupNewRows(newRows);
    $('tbody').append(newRows);
});