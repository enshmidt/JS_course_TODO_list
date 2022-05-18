module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-var": "error",
        "no-unused-vars": "error",
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "prefer-const": "error"
    }
};
