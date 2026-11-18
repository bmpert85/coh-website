/* Loads the YouTube player only when someone presses play. */
document.querySelectorAll('.video').forEach(function (b) {
  b.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube.com/embed/' + b.dataset.video + '?autoplay=1';
    f.title = 'Central Outreach Hub video';
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    var d = document.createElement('div');
    d.className = 'video';
    d.appendChild(f);
    b.replaceWith(d);
  });
});
