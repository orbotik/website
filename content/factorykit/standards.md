---
title: "FactoryKit Compatibility Standards"
categories: ["document"]
tags: ["factorykit", "standards"]
date: 2025-06-18
draft: false
showHero: true
heroStyle: "background"
layout: "simple"
draft: true
---

{{< badge >}}
FK-CS v1.0.0
{{< /badge >}}

{{< lead >}}
These standards are hereby set forth this year 2025 for the benefit of all the people (& robots) of earth...
{{< /lead >}}
Following these standards will ensure the FactoryKit platform remains accessible to creatives and inventors 
of all ages, and for as long as innovation thrives in the individual mind. As a fellow creative, please take a moment
to read through (and share) these standards with others. Let's ensure everyone can make informed choices and actively
make FactoryKit community thrive.

-----

{{< alert icon="creative-commons" cardColor="none" >}}
FactoryKit is licensed under the [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).     
A free commercial license is granted for many situations under the [FactoryKit Commercial Limited License 1.0](/factorykit/commercial-limited-license).
{{</ alert >}}

All FactoryKit printable or manufacturable designs in their complete and assembled form are called
*widgets*. *Widgets* come in two flavors: "Core" and "Freeform". To bear the label "FactoryKit" all widgets must follow
the standards set forth herein. FactoryKit widgets may include additional standards defined in a `STANDARDS` document
alongside the publication of the widget itself. These standards will supplement those defined here for the purposes of
that widget. 

## Freeform Widgets
**The majority of FactoryKit compatible widgets will be "Freeform".** Freeform widgets extend, incorporate, or build upon,
Core widgets *without negating* those Core widgets' *FactoryKit Compatibility Standards*. 

{{< alert icon="checkbox-outline" orbotikIconColor="green" cardColor="none" >}}
**Example**...    
**Q:** I created a a FactoryKit Pipes! Linear (Core widget) with a custom grip.    
**A:** Cool! It does not negate the Core widget's standards, so congratulations on your official FactoryKit freeform
widget design!
{{</ alert>}}

{{< alert icon="close-box-outline" orbotikIconColor="rust" cardColor="none" >}}
**Example**...    
**Q:** I added extra holes and tweaked to the connector of a FactoryKit Pipes! Linear (Core widget) in my new design.    
**A:** This makes your design non-FactoryKit. It would negate the incorporated Core widget's FactoryKit Compatibility
Standards because other FactoryKit Pipes! could no longer connect properly with your new design.
{{</ alert>}}

## Core Widgets
Core widgets are key compatibility designs meant to act as a shared baseline for creators wishing to use FactoryKit.
They are only released by the FactoryKit contributors and community through the official 
[ {{<icon "github">}} FactoryKit repository](https://github.com/orbotik/factorykit). 
Freeform widgets may not claim to be Core widgets, but in certain cases may be adopted as such (see §"Adoption & 
Abandoning of Core Widgets" below).

*Core widgets will...*
1. Designate that they are FactoryKit "Core" widgets in title and an accompanying `STANDARDS` document.
   This `STANDARDS` document will further define:
   1. Any notable "freeform" areas in the design that may be altered without breaking it's standard.
   2. Specify any other Core widgets included in it's design, and how they are incorporated.
2. Propagate or produce the *primary* portion of their design in *all* of the following sizes (cubed):    
   `20mm`, `40mm`, `80mm`, and `120mm`    
   These are deemed *FactoryKit Standard Sizes*.

   *Connectors* are the sole exception to the above rule. *Connectors* are designs made to connect with other 
   FactoryKit Core widgets and *must* be released with *at least one* of the X, Y, Z dimension measures, of it's
   *primary* portion of the design, `10mm`. Any additional dimensions may be `10mm` or any *FactoryKit Standard
   Size*. 
   `10mm` is deemed *FactoryKit Standard Connector Size*.
3. Define *straight edges* and X, Y, Z, positions in increments of 1/8, 1/4, 1/2, and 1 millimeter (no other fractions).
4. Version their design under [semver](https://semver.org/) standards and align their major and minor version with the
   the FactoryKit release versions dictated from the 
   [FactoryKit repository](https://github.com/orbotik/factorykit) for which they are (or will be) incorporated.
5. Not have designs that break compatibility with other Core widgets in the same major and minor versions.
6. Define either:
   1. A *connector* that joins two or more Core widgets together.
   2. A design that extends, incorporates, or builds upon, _**one** or more_ Core widgets *without negating* those Core
      widgets' FactoryKit standards. 

# Adoption & Abandoning of Core Widgets
The Core widgets and their classification thereof are managed by quorum vote by the owner and contributors of the
FactoryKit repository, and optionally, the general public. Such quorums are to have a duration shorter than 3 days, 
or longer than 15 days before conclusion. The quorum must be announced publicly on the 
[FactoryKit repository](https://github.com/orbotik/factorykit)] before voting begins, and the *results* of the vote must
be shared publicly.

In certain cases, a new Core widget may be adopted from a Freeform widget where all of the following conditions are met:
1. The widget meets the standards for a Core widget.
2. *and* the Licensor of said widget has agreed to reclassify the widget.
3. *and* the Licensor of said widget formally adopts the FactoryKit Commercial Limited License in perpetuity for the
   life of their Creative Commons BY-NC-SA 4.0 licensed widget.
1. *and* the owner and contributors of the FactoryKit repository adopt said widget by quorum.

When all conditions are met, the Freeform widget is officially re-classified as a Core widget and the Licensor
of said widget may claim as much for as long as the widget is licensed under Creative Commons BY-NC-SA 4.0, and the
FactoryKit Commercial Limited License, and the widget remains officially adopted (not revoked or abandoned).

The owner and contributors of the FactoryKit repository may revoke the adoption of, or abandon the classification of,
any Core widget classification by quorum.

### Official FactoryKit Core Widgets

#### *The* Nub
The FactoryKit Core Nub is one of the most important pieces of FactoryKit. It is designed to be the generic connector
to join almost any FactoryKit widget together. While widgets may utilize their own specific way of connecting (like
Pipes!), the Core Nub can help act as a bridge to other types of widgets. 

**STANDARDS**
| Measure | Values |
|:-:|:-|
| `X, Y, Z` (mm) | `X=10mm, Y=10mm, Z=10mm` |

##### Core Nub (Male)

##### Core Nub (Female)

##### Core Nub (Extension)

##### Core Nub (Male to Male)

##### Core Nub (Female to Female)

#### Pipes!

##### Core Connector (Male)

##### Core Connector (Female)

##### Core Linear

##### Core Elbow


