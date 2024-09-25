var sp, bt_st, bt_stp, bt_reset, t, ms, s, mn, h;
window.onload = function() {
    sp = document.getElementsByTagName('span');
    bt_st = document.getElementById('start');
    bt_stp = document.getElementById('stop');
    bt_reset = document.getElementById('reset');
    t;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
}

function up_chrono() {
    ms += 1;
    if (ms == 10) {
        ms = 0;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }
    sp[0].innerHTML = h + "h:";
    sp[1].innerHTML = mn + "min:";
    sp[2].innerHTML = s + "s:";
    sp[3].innerHTML = ms + "ms";
}

function start() {
    t = setInterval(up_chrono, 100);
    bt_st.disabled = true;
}

function stop() {
    clearInterval(t);
    bt_st.disabled = false;
}

function reset() {
    clearInterval(t);
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    sp[0].innerHTML = h + "h:";
    sp[1].innerHTML = mn + "min:";
    sp[2].innerHTML = s + "s:";
    sp[3].innerHTML = ms + "ms";
    bt_st.disabled = false;
}
