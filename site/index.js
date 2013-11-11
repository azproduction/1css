$(function () {
    var oneCss = window['1css'];
    var master = 'css',
        slave = '1css';

    var reverse = {
        'css': '1css',
        '1css': 'css'
    };

    var editors = {
        'css': ace.edit('css'),
        '1css': ace.edit('1css')
    };

    var sessions = {
        'css': editors['css'].getSession(),
        '1css': editors['1css'].getSession()
    };

    var methods = {
        'css': oneCss.encode,
        '1css': oneCss.decode
    };

    sessions['css'].setMode('ace/mode/css');

    function syncContent() {
        sessions[slave].setValue(methods[master](sessions[master].getValue()));
    }

    function syncScrollTop() {
        sessions[slave].setScrollTop(sessions[master].getScrollTop());
    }

    function syncScrollLeft() {
        sessions[slave].setScrollLeft(sessions[master].getScrollLeft());
    }

    function flipRoles(e, editor) {
        var current = editor.container.id;
        if (master === current) {
            return;
        }
        master = current;
        slave = reverse[current];

        onOff(slave, 'off');
        onOff(master, 'on');
    }

    function onOff(target, method) {
        sessions[target][method]('change', syncContent);
        sessions[target][method]('change', syncScrollTop);
        sessions[target][method]('change', syncScrollLeft);
        sessions[target][method]('changeScrollTop', syncScrollTop);
        sessions[target][method]('changeScrollLeft', syncScrollLeft);
    }

    editors['css'].on('focus', flipRoles);
    editors['1css'].on('focus', flipRoles);
    onOff('css', 'on');

    $.get('test/fixtures/bootstrap.css', function (bootstrapCss) {
        sessions['css'].setValue(bootstrapCss);
    });
});
