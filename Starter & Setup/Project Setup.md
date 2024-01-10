<h1 style="text-align:center">How to Set Up A New Project</h1>

## I. Setup Webpack and ```.gitignore```

1. Run ```npm init``` in the project directory to generate a ```package.json``` file. Use the default values if you like. 
2. Run ```npm install webpack webpack-cli --save-dev``` to install webpack to the ```node_modules``` directory of your project.
3. Add a ```.gitignore``` file to ignore the ```node_modules``` folder when backing up to GitHub. If these packages are needed when downloading, one can always run ```npm install``` to install all the packages listed in the ```package.json``` file.
4. Create a ```src``` directory with a ```index.js``` file.
5. Create a ```dist``` directory with ```index.html``` and ```styles.css``` files.

## II. Link Your Files

1. In ```index.html``` grab the text from the html file in this folder.
2. Create a ```webpack.config.js``` and include the text from the file in this folder.
3. Run ```npx webpack --config webpack.config.js``` to run the build; this should create the ```main.js``` file in the ```dist``` folder.
4. Run ```npx webpack --watch``` so you do not have to rerun webpack everytime you make a change.

## III. Add Testing Support

1. In ```package.json```, change the ```test``` line to read ```"test": "jest"```.
2. In order for jest to support ECMAScript, install Babel dependencies:

        npm install --save-dev babel-jest @babel/core @babel/preset-env

3. Then, create a ```babel.config.js``` file in the root of your project with the following content:

        module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };

4. In your regular ```example.js``` file, export your functions to test as an object:
    
        module.exports = {
            add,
            subtract,
            multiply,
            divide
        }

5. In your ```example.test.js``` files, a basic test looks like the following:

        const funcs = require('./example');

        describe("addative functions", () => {

            test('adds numbers correctly', () => {
                expect(funcs.add(10, 20)).toBe(30);
            })

            test('subtracts numbers correctly', () => {
                expect(funcs.subtract(10, 20)).toBe(-10);
            })
        })

## IV. Setup  CSS

1. Add a ```reset.css``` file in the dist folder and add the context from the css file in this folder.
2. In your ```styles.css``` file, add the text from the css file in this folder.