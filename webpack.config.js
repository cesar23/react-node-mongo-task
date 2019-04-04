module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },

    module: {
        ///configuraciones de  webpack
        rules: [
            {
                use: 'babel-loader', //que  use
                test: /\.(js|jsx)$/,  //que  compile todos los js que  terminen en js
                exclude: /node_modules/ //que no compile
            }
        ]
    }
};