jQuery(function() {

    /**
     *  Create a sample messages view
     */
    $("body").bootria()
        .container()
            .row()
                .span(4)
                    .alert("Succes", "Save successful!", "success")
                .end()
                .span(4)
                    .alert("Error", "An error occures!", "error")
                .end()
                .span(4)
                    .alert("Info", "Just some basics!", "info")
                .end()
            .end()
            .row()
                .span(3)
                    .alert("Succes", "Save successful!")
                .end()
                .span(3)
                    .alert("Error", "An error occures!")
                .end()
                .span(3)
                    .alert("Info", "Just some basics!")
                .end()
                .span(3)
                    .alert("Error", "An error occures!")
                .end()
            .end()
    
});