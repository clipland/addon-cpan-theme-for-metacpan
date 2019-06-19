CPAN Theme for MetaCPAN
=======================

## DESCRIPTION

This add-on injects CSS rules into web pages and modifies parts of the HTML DOM so that meta::cpan looks and
feels more like its older incarnation search.cpan.org.

### Rationale

Although the migration from search.cpan.org's dated infrastructure to the newer code-base of
[meta::cpan](https://www.metacpan.org/) brought countless fixes and innovations to the CPAN community, it
also left one thing behind: the good and trusted old web-design. Coder-years of module documentation perusal
engrained it into many of Perl's brightest minds. The migration towards the updated (and changed) design
of meta::cpan cut off some of these long-learned reflexes of cross-reading module POD. That's, well, less optimal.

So, if you never really felt quite at home at meta::cpan and miss the old way browsing search.cpan.org looked,
then this Browser Add-On here is for you.

### Why an Add-On?

If you follow the development of [metacpan-web](https://github.com/metacpan/metacpan-web/) on github, you can learn
that there were earlier efforts to get theme-ability into the meta::cpan web-app. Some users may request a "dark mode",
others may want a more perldoc-y way of laying out things, less of the "community approach", etc. Different things. Until
theme support with a preference mechanism arrives in the code-base, this add-on here offers a "Classic" theme for
search.cpan.org.


## INSTALLATION

Install this Add-on from Mozilla's Add-On repository:

 (link follows)

Or, as temporary add-on:

Clone this repository. Then, in Firefox, open [about:debugging](about:debugging), click "Load a temporary
Add-On" and select the manifest.json file inside this add-on's directory.

You may also use web-ext to generate a self signed .xpi archive.


## AUTHOR

Brought into the world by the good folks at Clipland, with obviously too much time on their hand and an
inclination towards nostalgia.

Clipland GmbH, [clipland.com](http://www.clipland.com/)


## COPYRIGHT & LICENSE

Bundled icons and logo-artwork has been taken from the original s.c.o pages and is believed to be copyrighted
by Perl.org and thus to be licensed under The Perl Foundation's Artistic License Version 2.0.

The original (and bundled) favicon of s.c.o is a camel and the use of the camel image in association with the
Perl language is a trademark of O'Reilly Media, Inc. [Used with permission](https://web.archive.org/web/20080513235043/http://www.onlamp.com/pub/a/oreilly/perl/usage/).

If you feel there's a legal problem that'd need be addressed, please contact us.


Everything else is

Copyright 2019 Clipland GmbH. All rights reserved.

This code is free software, licensed under [GPLv3](http://www.gnu.org/licenses/gpl).


