## Vue Events Bulletin Board

This is the code for the Vue.js [tutorial on Scotch.io](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction). In the tutorial we build a events bulletin board application and cover the basics of [Vue](http://vuejs.org/).


## Installation

Change the directory to `node-bulletin-board` and follow the commands:

1. Run `npm install`.
2. Run `node server.js`.
3. Visit [http://localhost:8080](http://localhost:8080).

   <img width="1199" alt="image" src="https://github.com/user-attachments/assets/2cf0d1b5-5dde-491c-a158-8425df4576c5">

## Using Docker

Clone the repository and run the following commands:

```
docker build -t bulletin-board .
docker run -d -p 8080:8080 bulletin-board
```


## RESTful API (contributed by Jason Lam)

1. **Use Node.js & Express for backend server and router.**
2. **RESTful requests towards the server to simulate CRUD on *events* model, instead of local hardcoded ones.**
3. Translated into Traditional Chinese.

## RESTful API written in Go 

If you would like to use a backend written in Go, [thewhitetulip](http://github.com/thewhitetulip) has written on. See [the source code](https://github.com/thewhitetulip/go-vue-events).


## Git Guide

### Add, Commit, Push
- `git add .` → Add all files to staging area
- `git commit -m "message"` → Commit changes with message
- `git push` → Push changes to remote repo

### Pull
- `git pull` → Fetch and merge changes from remote

### Changing Remote URL
- `git remote set-url origin <new-ssh-url>` → Change the remote repository URL

### Stash, Revert, Reset
- `git stash` → Temporarily save changes without committing
- `git stash apply` → Reapply stashed changes
- `git revert <commit>` → Undo a commit by creating a new commit
- `git reset --soft <commit>` → Move HEAD to commit, keep changes staged
- `git reset --hard <commit>` → Move HEAD to commit, discard changes

### Log, Diff, Show
- `git log --oneline` → Show commit history in one line per commit
- `git diff` → Show changes in working directory not yet staged
- `git diff --staged` → Show changes staged for commit
- `git show <commit>` → Show details of a specific commit

 
