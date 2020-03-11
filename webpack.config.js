const path = require('path');

module.exports = (env, ...props) => {
  console.log('env', env);
  console.log('props', props);

  return {
    entry: './src/index.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
}
