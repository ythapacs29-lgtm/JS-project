What am I Building?


Error on 1ST DAY
1. Fast-Forward / Remote Changes Error
The Error: [rejected] main -> main (fetch first)

The Cause: The remote repository on GitHub had a file (like a default LICENSE) that your local directory didn't have yet. GitHub wouldn't let you push until you synced those remote updates first.

The Fix:

git pull origin main: Downloads and integrates remote changes.

2. Unrelated Histories Error
The Error: fatal: refusing to merge unrelated histories

The Cause: Your local folder and your remote GitHub repository were initialized as two completely independent Git timelines (one created locally, one initialized on GitHub with a license), so Git didn't know how to connect them automatically.

The Fix:

git pull origin main --allow-unrelated-histories: Forces Git to combine the two separate project histories together.

3. Missing Editor Error
The Error: error: cannot run visual: No such file or directory

The Cause: Git tried to open a text editor named visual to let you write or confirm your merge commit message, but that editor wasn't installed or configured on your system.

The Fix:

git commit -m "Merge remote-tracking branch 'origin/main'": Bypasses the missing editor popup by providing the commit message directly via the command line.

4. Email Privacy Restriction Error
The Error: remote: error: GH007: Your push would publish a private email address.

The Cause: GitHub's security settings block command-line pushes if your local commit uses a personal email address instead of your masked GitHub no-reply address.

The Fix:

git config --global user.email "238908104+ythapacs29-lgtm@users.noreply.github.com": Updates your Git configuration to use your official GitHub no-reply email.

git commit --amend --reset-author --no-edit: Applies the new email fix to your existing commit without changing the commit message.

git push origin main: Successfully pushes your local repository up to your JS-project GitHub repository.
