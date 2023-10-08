document.cookie = "username=Roger Waters";
document.cookie = "product=Guitar" /// update cookie
document.cookie = "userage=70" ///create cookie
document.cookie = "status=musician" /// create cookie


function getCookie(name) {
    let toRetrun = null;
    document.cookie.split('; ').forEach((item) => {
        let key = item.split('=')[0];
        let value = item.split('=')[1];

        if (key === name) toRetrun = value;
    });

    return toRetrun;
}

document.getElementById('cookie').textContent = `Hello ${getCookie('username')} you have  ${getCookie('product')}`;
