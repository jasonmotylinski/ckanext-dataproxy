document.addEventListener("DOMContentLoaded", function(event) {

    //Creates DataProxy button and injects it into DOM
    function createButton(){
        var icon = document.createElement('i');
        icon.className = 'icon-rocket';
        var btn = document.createElement('a');
        btn.id = 'dataproxy-assist';
        btn.className = 'btn';
        btn.href = 'javascript:;';
        btn.onclick = 'myfunc()';
        btn.appendChild(icon);
        btn.appendChild(document.createTextNode('Data Proxy'));
        $('#field-image-upload').parent().append(btn);
    }

    createButton();

    $('#content').on("click", "#dataproxy-assist", function() {
        //enable fields so they get submitted with form
        $('#dataproxy-fields input, #dataproxy-fields select').prop("disabled", false); //enable fields
        $('#dataproxy-fields').show();
        //Now mimic the behaviour as if Link button was pressed
        var parent = $('#dataproxy-assist').parent().parent();
        parent.siblings('div').show();
        parent.hide();
    });

    $('#content').on("click", ".btn.btn-danger.btn-remove-url", function() {
        $('#dataproxy-fields').hide();
        //disable fields so they don't get submitted
        $('#dataproxy-fields input, #dataproxy-fields select').prop("disabled", true);
    });
});