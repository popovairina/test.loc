module.exports = function (gulp, plugins, src) {
    return function () {
        plugins.browserSync({
            proxy: "test.loc",
            notify: false,
        });
        // plugins.browserSync.init({
        //     server: {
        //         baseDir: "./public"
        //     }
        // });
    };
};