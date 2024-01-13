<h1 style='text-align:center;font-size:3rem;'>Node Packet Manager (NPM)</h1>

# General Information
NPM is really two things:

1. A library of thousands of packages published by other developers that we can use for free. 
2. A command line tool to easily install and manage those packages in our Node projects.

NPM helps track all of the dependencies or other packages that our software depends on. It also makes it easy to install all fo the dependencies. 

The easiest way to setup a NPM package is to use ```npm init``` in the directory you wish to set everything up.

## ```package.json```
This file will track all of the dependencies and additional information regarding your project. This is helpful for others when using our software since they will easily be able to install all required packages. It also makes it so we can backup our code (e.g. to GitHub), without having to upload and store all of the additional code found in these dependencies.

In order to install all required dependencies we can use:

    npm install