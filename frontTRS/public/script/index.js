$(document).ready(function(){
    requester();
    window.setInterval(function(){
        axios({
            method: 'get',
            url: 'http://192.168.137.1:8000/notif/'
        })
        .then(response => {
            console.log("response gained");
            if(response.data.status == "ok"){
                $('#notif-card').remove();
                var notif = response.data.notifications;
                for(var i = 0; i < notif.length; i++){
                    $('#notif-head').append(
                        "<div class=\"card m-3 p-3\" id=\"notif-card\"><h3>" + notif[i].header + "</h3><h6>"+ notif[i].timestamp +"</h6><div class=\"embed-responsive embed-responsive-16by9\"><img class=\"embed-responsive-item\" src=\"" + notif[i].img + "\"></div></div>"  
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


// function poll(fn, timeout, interval) {
//     var endTime = Number(new Date()) + (timeout || 2000);
//     interval = interval || 100;

//     var checkCondition = function(resolve, reject) {
//         // If the condition is met, we're done! 
//         var result = fn();
//         if(result) {
//             resolve(result);
//         }
//         // If the condition isn't met but the timeout hasn't elapsed, go again
//         else if (Number(new Date()) < endTime) {
//             setTimeout(checkCondition, interval, resolve, reject);
//         }
//         // Didn't match and too much time, reject!
//         else {
//             reject(new Error('timed out for ' + fn + ': ' + arguments));
//         }
//     };

//     return new Promise(checkCondition);
// }
/* <div class="card m-3 p-3">
    <h4>{{ post.0 }}</h4>
    <p>{{ post.1 }}</p>
    <div class="embed-responsive embed-responsive-16by9">
        <img class="embed-responsive-item" src="https://i2-prod.mirror.co.uk/incoming/article225241.ece/ALTERNATES/s1200b/cctv-pic-carl-fox-762819831.jpg">
    </div>
</div> */