---
layout: single
title:  "Welcome to Jekyll + Minimal Mistakes Jekyll theme"
date:   2023-08-31 14:20:00 -0000
categories: jekyll them add
---
Starting from jekyll newPermalink
Scaffolding out a site with the jekyll new command requires you to modify a few files that it creates.

Edit _config.yml. Then:

Replace `<site root>`/index.md with a modified Minimal Mistakes index.html. Be sure to enable pagination if using the home layout by adding the necessary lines to _config.yml.
Change layout: post in_posts/0000-00-00-welcome-to-jekyll.markdown to layout: single.
Remove about.md, or at the very least change layout: page to layout: single and remove references to icon-github.html (or copy to your_includes if using it).

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[Minimal Mistakes Theme]: https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/
