module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        indent: [
            2,
            4
        ],
        quotes: [
            2,
            'single'
        ],
        'space-before-function-paren': 0
    },
    globals: {}
}
