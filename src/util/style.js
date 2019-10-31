var style = `
body {
    padding:0;
    margin:0;
    overflow:hidden;
}
body.test * {
    border: solid black 1px;
}

.fill-width {
    height: 100vw;
}

.full-height {
    height: 100vh;
}

.grid-parent {
    display: grid;
    grid-template-columns:auto auto auto auto auto auto auto auto auto auto auto auto;
    grid-auto-rows: 40px;
    grid-gap:20px;
}
`;

export default style;