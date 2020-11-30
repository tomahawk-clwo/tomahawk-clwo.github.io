M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        edge: 'right',
    };
    var instances = M.Sidenav.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    var options = {
        duration: '300',
        onShow: 'false',
        swipeable: 'true',
        responsiveThershold: 'Infinity'
    }
    var instance = M.Tabs.init(elems, options);
});