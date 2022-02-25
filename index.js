var vid = document.getElementById('vid');
var fg = new URL(window.location).search.replace('?', '').split('&').forEach(function (p) {
    var parts = p.split('=');
    if (parts[0] == 'video_url') {
        vid.src = parts[1];
    } else {
        fetch('videoorg.json').then(async function (r) {
            var fh = await r.text();
            vid.src = JSON.parse(fh).video_origin;
        })
    }
});