import style from './style.js'

function toHtml(layout) {
    var root = {
        tag: "html",
        opts: {},
        children: []
    };

    var head = {
        tag: "head",
        opts: {},
        children: [{
            tag: "title",
            opts: {},
            children: [],
            html: "Title"
        }, {
            tag: "style",
            opts: {},
            children: [],
            html: style
        }, ]
    };
    root.children.push(head);

    var body = {
        tag: "body",
        opts: { class: "test" },
        children: []
    };

    var grid = {
        tag: "div",
        opts: { class: "fill-width full-height grid-parent" },
        children: []
    };

    layout.forEach(item => {
        grid.children.push({
            tag: "div",
            opts: { class: "grid-elem", id: item.i, style: `grid-row-start: ${item.y+1};grid-row-end: ${item.y+1 + item.h};grid-column-start: ${item.x+1};grid-column-end: ${item.x+1 + item.w};` },
            children: [],
            html: item.i
        });
        console.log(grid);
    });

    body.children.push(grid);
    root.children.push(body);

    return renderObject(root);
}

function renderObject(node) {
    var result = "";
    var opts = ""

    if (node.children.length === 0) {
        // Build the options, e.g. classes id style e.t.c
        Object.keys(node.opts).forEach(key => {
            opts += ` ${key}="${node.opts[key]}"`
        })
        return `<${node.tag}${opts}>${(node.html) ? node.html : ""}</${node.tag}>`
    } else {
        // Build the options, e.g. classes id style e.t.c
        Object.keys(node.opts).forEach(key => {
            opts += ` ${key}="${node.opts[key]}"`
        })
        result += `<${node.tag}${opts}>`;
        result += (node.html) ? node.html : "";
        node.children.forEach((x) => {
            result += renderObject(x);
        });
        result += `</${node.tag}>`;
        return result;
    }
}


export default toHtml;