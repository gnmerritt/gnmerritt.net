---
layout: post
title: Downloading Photos of You from Facebook
categories: deletefacebook
---

Over the next couple weeks I'm going to work on tools to help transition all my data from Facebook to [Diaspora*](https://diasporafoundation.org/). Part of that is making sure that all the data I want to keep from my Facebook days is safely stored somewhere locally.

First task up was to use Facebook's tool ("Download a copy" link at the bottom of the [settings page](https://www.facebook.com/settings)) to download an archive of "all my data". This gives you an archive full of HTML files, images and video clips with an `index.html` you can open in a browser.

![archive layout]({{ "/assets/fb-data-layout.png" | absolute_url }}){ height=200px }

![archive index]({{ "/assets/fb-data-index.png" | absolute_url }}){ height=300px }

I noticed that my data archive was only 60 megs - seemed a little bit light for 12 years of usage data. The first thing I noticed was missing was any photo I was tagged in but that I didn't upload myself. I assumed that these would come along for the ride by default, but apparently not.

It turns out that it's impossible to fetch this list of photos via the Graph API (and consequently, from a third party app), since the access token you can create as an individual user is not authorized to view your friend's data (including their photos, which they've tagged you in). Yay privacy! If this had been the case years ago (or _always_) then Cambridge Analytica couldn't have gotten 50 million profiles from 270k users.

## HOWTO: Downloading all photos you're tagged in, you rebel you

First off you need your facebook id. I used [this tool](https://zerohacks.com/find-facebook-id/) which didn't ask for any permissions so is probably fine?

Next you need to go to a special search results page which contains all the photos you're tagged in: [https://www.facebook.com/search/YOUR_ID_NUM_HERE/photos-of/intersect](https://www.facebook.com/search/YOUR_ID_NUM_HERE/photos-of/intersect). This worked for me as of April 2018. To get the page to fully load I had to scroll down a bunch until new things stopped turning up.

Next, pick out all the images on the page with this javascript snippet:

{% highlight javascript %}
for (img of document.getElementsByTagName('img')) { if (!img.alt) continue; console.log(img.src); }
{% endhighlight %}

Copy and paste the output and stick it into a text file. There'll probably be a warning from FB about copying javascript into the console from random sites - I promise I'm not trying to steal your account credentials. Like, this whole post is advocating that you delete Facebook :-D (here's [what console.log does](https://developer.mozilla.org/en-US/docs/Web/API/Console/log))

OK phew, we're almost there. Text file should look something like this:

![fb photo links]({{ "/assets/fb-text.png" | absolute_url }}){ height=100px }

Now one more shell command to download all the pictures you pulled out of the search results page. Make sure to use the path to your text file in the first part of the command.

{% highlight bash %}
cat <your file here> | sed -E 's/VM[[:digit:]]+:[[:digit:]]+ //' | xargs -n1 -P4 wget
{% endhighlight %}

And that's it! You've now got local copies of all the images you're tagged in on Facebook. One step closer to deletion!

_TODO_: Seems like they're an arbitrary resolution, how do we force search to give us the largest picture possible?
