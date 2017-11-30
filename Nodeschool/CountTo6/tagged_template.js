const username = process.argv[2];
const comment = process.argv[3];

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(current , ...subs) {
    let string = current[0];

    for (var i = 0; i < subs.length; i++) {
        string = string + escape(subs[i]) + current[i + 1];
    };

    return string
}

function escape(str) {
    return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
