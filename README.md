# Babel

    node_modules/.bin/babel-node src/main.js

throws `SyntaxError: await is only valid in async functions and the top level bodies of modules`.
  
# Webpack

    node_modules/.bin/webpack src/main.js
    node dist/main.js
    
works fine and displays the output:

    ESM works!
    CJS works!
