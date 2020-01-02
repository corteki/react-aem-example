module.exports = {
    context: __dirname,
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/react-typescript-demo/clientlibs",
    libs: {
        name: "clientlib-dependencies",
        allowProxy: true,
        categories: ["react-typescript-demo.dependencies"],
        embed: ["react-typescript-demo.responsivegrid"],
        jsProcessor: ["min:gcc"],
        serializationFormat: "xml",
        assets: {
            js: [
                "dist/**/*.js"
            ],
            css: [
                "dist/**/*.css"
            ]
        }
    }
};