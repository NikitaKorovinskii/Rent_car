const path = require('path')

module.exports={
  mode:'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bungle.js'
  }
};
