$(function () {
    var oneCss = window['1css'];
    var aceCssEditor = ace.edit('css').getSession();
    var ace1cssEditor = ace.edit('1css').getSession();
    aceCssEditor.setMode('ace/mode/css');

    function sync() {
        ace1cssEditor.setValue(oneCss.encode(aceCssEditor.getValue()));
    }

    aceCssEditor.on('change', sync);

    $.get('test/fixtures/bootstrap.css', function (bootstrapCss) {
        aceCssEditor.setValue(bootstrapCss);
    });
});
