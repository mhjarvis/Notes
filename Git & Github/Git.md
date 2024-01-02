<h1 style="text-align: center">Git</h1>

## What is Git
Git is a version control system that tracks and manages changes to files over time. 

* [Git documentation](https://git-scm.com/)
* [GitKraken (GUI)](https://www.gitkraken.com/)

## Git Basics

```git status``` - gives information on the current status of a git repository and its contents. 
```git init``` - creates a new git repository in the current directory.
```git add [filename] [filename]``` -   adds files to the staging area from the working directory.
```git commit -m ["message"]``` - commit changes from the staging area to the repository; must include message. 
```git log``` print list of commits.
```git commit --amend``` - allows you to ammend the previous commit only. If adding a file to the ```--amend```, ```git add``` the file prior to the ```--amend``` command.


## Ignoring Files (```.gitignore```)
Git can be told to ignore certain files in a repository using a ```gitignore``` file. This could be useful for: 

* Secrets, API keys, credentials, etc.
* Operating System files (.DS_Store on Mac)
* Log files
* Dependecies and packages

Create the ```.gitignore``` file in the root of a repository. Inside this file you can write patterns to tell which files/folders are to be ignored.

    .DS_Store           // individual files ignored
    /somefolder         // ignore folder or directory

Use [gitignore.io](https://www.toptal.com/developers/gitignore) to help create the ```.gitignore``` file depending on the type of project you are working on.

## Branching
Branches is what allows multiple developers work on a project, using the same code base. Think different timelines that will not impact each other (unless you merge them). 