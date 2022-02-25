var vid = document.getElementById('vid');
var ggfd = false;
var fg = location.search.substr(1).split('&').forEach(function (p) {
    var parts = p.split('=');
    if (parts[0] == 'video_url') {
        ggfd = true;
        vid.src = decodeURIComponent(parts[1]);
    } else {
        if (!ggfd) {
            fetch('videoorg.json').then(async function (r) {
                var fh = await r.text();
                vid.src = JSON.parse(fh).video_origin;
            })
        }
    }
});
