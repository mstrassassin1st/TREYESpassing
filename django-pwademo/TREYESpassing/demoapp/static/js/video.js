function requester(){
    axios({
        method: 'get',
        url: 'processVideo/',
        data: '',
        responseType: 'blob',
        headers: {
            'Content-Type': 'multipart/form-data',
            "X-CSRFToken": csrfToken
        }
    })
    .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        let uploadVideoView = document.getElementById('uploadVideoView');
        let filterestPreviewContainer = document.getElementsByClassName('filterest-video-preview')[0];
        uploadVideoView.setAttribute('src', url);
    })
    .catch(ex => {
        alert('Failed to process video, please upload another one');
    })
}