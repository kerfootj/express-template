module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        browser: false,
        node: true,
        commonjs: true,
        es2021: true,
    },
    plugins: ['prettier', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    // allow {} as a type for Express Request and Response
                    '{}': false,
                },
                extendDefaults: true,
            },
        ],
    },
};
