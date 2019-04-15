function showNotification(from, align, type, text){
    $.notify({
        icon: "add_alert",
        message: text

    },{
        type: type, //danger
        timer: 2000,
        placement: {
            from: from,
            align: align
        }
    });
    }