<h1 style="text-align: center; font-size:3em">Git</h1>

# What is Git
Git is a version control system that tracks and manages changes to files over time. 

* [Git documentation](https://git-scm.com/)
* [GitKraken (GUI)](https://www.gitkraken.com/)

# Git Basics

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

# Branching
Branches is what allows multiple developers work on a project, using the same code base. Think different timelines that will not impact each other (unless you merge them). 

* The Master Branch (or Main) - often this is the branch designated as the 'source' or 'truth' branch of their codebase.
* Head - this is simply a pointer that refers to the current 'location' in your repository. It is a branch reference and usually points to the most recent commit made.

* ```git branch``` - shows us current branches in a repository.
* ```git branch <branch-name>``` - makes a new branch based on the current HEAD. This only creates a branch, it does not switch to it.
* ```git switch <branch-name>``` - switch to the named branch.
* ```git checkout <branch-name>``` - also allows switching between branches. This command also performs a variety of additional things.
* ```git switch -c <branch-name>``` - create the new named branch AND switch to that branch.

Switching to a branch without first commiting or stashing them will throw an error.

## Deleting and Renaming a Branch

* ```git branch -d <branch-name>``` - if the branch has not been merged, it will throw and error. You can bypass using the `-D` option to force the delete.
* ```git branch -m <new-branch-name>``` - rename branch will only work if you are on the actual branch you want to rename.

# Merging
Merging allows us to incorporate change from one branch into another. Branches are merged and not commits and we always merge to the current HEAD branch. Merging is a two step process:

1. Switch to or checkout to the branch you want to merge the changes into.
2. Use the ```git merge``` command to merge changes from a specific branch. 

## Fast-forward Merge
This type of merge simply moves the HEAD pointer forward to incorporate the changes on the branch you are merging. 

    git switch <branch-name>            // (usually main branch)
    git merge <branch-name>

##