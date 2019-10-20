$(document).ready(function(){
    requester();
    window.setInterval(function(){
        axios({
            method: 'get',
            //for use in desktop use localhost, mobile 192.168.137.1 or something equivalent.
            url: 'http://192.168.137.1:8000/notif/'
        })
        .then(response => {
            if(response.data.status == "ok"){
                $('.notif-item').remove();
                var notif = response.data.notifications;
                for(var i = 0; i < notif.length; i++){
                    $('#notif-head').append(
                        "<div class=\"card m-3 p-3 notif-item\"><h3>" + notif[i].header + "</h3><h6>"+ notif[i].timestamp +"</h6><div class=\"embed-responsive embed-responsive-16by9\"><img class=\"embed-responsive-item\" src=\"" + notif[i].img + "\"></div>" 
                    ); 
                }
            } 
        })
        .catch(ex => {
            alert('Failed to fetch notification!');
        });
    }, 10000);
});


function requester(){
    axios({
        method: 'get',
        //for use in desktop use localhost, mobile 192.168.137.1 or something equivalent.
        url: 'http://192.168.137.1:8000/processVideo/',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.data.detected)
    })
    .catch(ex => {
        alert('Failed to process video, please upload another one');
    });
}