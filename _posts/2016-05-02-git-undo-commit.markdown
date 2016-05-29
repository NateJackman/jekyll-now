---
layout: post
title:  "Git undoing a commit"
date:   2016-05-02 18:11:03
permalink: 2016/05/02/git-undo-commit/
uid: 2
---

It's common in development to make a commit and before you send it up realize that it needs adjusting of some sort.  Often times I have to remove something from a commit that isn't ready to go up with the rest or was accidentally staged and committed.  

A quick and safe way to do this without losing any modifications is to do a soft reset.

**Undoing a commit:**
{% highlight bash %}
git commit -m "commit that will need changed"
git reset --soft HEAD~
{% endhighlight %}

What this does is reset git to before the previous commit was made, leaving everything staged.  Now you can adjust the files as needed and recommit the changes.

**To unstage all files from the commit**
{% highlight bash %}
git reset
{% endhighlight %}

In some cases, if you are only looking to add to a commit, `git commit --amend` will do the job and add all staged files to the previous commit.

**Note:** these operations should only be performed locally and not on code that has been shared upstream.