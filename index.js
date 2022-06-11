var vid = document.getElementById('vid');
var fgdd = false;
var fg = new URL(window.location).search.replace('?', '').split('&').forEach(function (p) {
    var parts = p.split('=');
    if (parts[0] == 'autoplay') {
        vid.autoplay = true;
    } else if (parts[0] == 'nocontrols') {
        vid.autoplay = true;
        vid.controls = false;
    }  else if (parts[0] == 'loop') {
        vid.loop = true;
    } else if (parts[0] == 'video_url') {
        fgdd = true;
        vid.src = decodeURIComponent(parts[1]);
    }
});
if (!fgdd) {
    fetch('videoorg.json').then(async function (r) {
        var fh = await r.text();
        vid.src = JSON.parse(fh).video_origin;
    })
}
