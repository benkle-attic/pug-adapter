const attic = require('benkle-attic');
const pug = require('pug');
const path = require('path');

class PugAdapter extends attic.template.Adapter {
    constructor(directory, options) {
        super(directory, options);
        this.template = pug.compileFile(path.join(this.directory, this.options.directory, this.options.main));
    }

    render(vars) {
        return this.template(vars);
    }
}

exports.create = function (directory, options) {
    return new PugAdapter(directory, options);
};