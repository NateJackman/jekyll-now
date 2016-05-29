---
layout: post
title:  "Simple way to serve static folders locally"
date:   2016-04-20 08:11:03
permalink: 2016/04/20/simple-http-server/
uid: 1
---

As a developer I run into a lot of situations where I need to fire up a quick web server to perform some task. **Python** ships with osx and makes this task quite simple. 

**In terminal enter:**
{% highlight bash %}
cd path/to/my/dir
python -m SimpleHTTPServer 8080
{% endhighlight %}

If you have Python installed and all went well the terminal will output this:

{% highlight bash %}
Serving HTTP on 0.0.0.0 port 8080 ...
{% endhighlight %}

Now you can access the directory in your browser `http://localhost:8080`.  If you are loading a static website the root url should load the `index.html`, otherwise it'll be a directory listing of the files in that folder.

Depending on the network, the web server should be viewable on other devices on the same network.  To reach the server you will need to find the IP address of the host machine along with the port number we started the server on. Enter this into a browser on the target device. ie. `http://192.168.1.1:8080` and browse away.

If we need to run multiple web servers or switch the port, just change the port param in the command `8080` to the desired port `3333`.
{% highlight bash %}
python -m SimpleHTTPServer 3333
{% endhighlight %}

---
Read more: [20.19. SimpleHTTPServer — Simple HTTP request handler — Python 2.7.11 documentation][docs]

[docs]: https://docs.python.org/2/library/simplehttpserver.html
