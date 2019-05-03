module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        'camelcase': 2,
        'id-length': 2,
        'keyword-spacing': ["error", { "after": true }],
        'space-infix-ops': ["error", {"int32Hint": true}],
        'comma-spacing': ["error", { "before": false, "after": true }],
        'space-before-blocks': "error",
        'key-spacing': ["error", { "afterColon": true }],
        'no-multi-spaces': "error",
        'space-in-parens': ["error", "never"],
        'space-before-function-paren': ["error", "always"],
        'func-call-spacing': ["error", "never"],
        'no-multiple-empty-lines': "error",
        'padded-blocks': ["error", "never"]
    }
};