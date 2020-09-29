module.exports = {
    presets: ['@babel/preset-react', '@babel/plugin-transform-typescript'],
    tailwind: {
        plugins: ['macros'],
        config: './src/tailwind.config.js',
        format: 'auto',
    },
};
