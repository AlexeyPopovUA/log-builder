if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/production/log-builder.min.js");
} else {
    module.exports = require("./dist/debug/log-builder.js");
}
