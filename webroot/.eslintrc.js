module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    plugins: [
        // Only if you installed plugin for JQuery
        'dollar-sign',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'dollar-sign/dollar-sign': [2, 'ignoreProperties'],
        'func-names': 'off',
        'indent': ['error', 4, {'ignoreComments': true}],
        'max-len': 'off',
        'no-console': ['error'],
        'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
        'no-prototype-builtins': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': 'off',
        'prefer-arrow-callback': 'off',
        'quote-props': ['error', 'consistent'],
    },
};