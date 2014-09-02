#markbot


*A robot that rewards good behaviour.*

You've been scratching your head, trying to solve a problem all day and going no where fast.  Suddenly, out of nowhere, someone on IRC sends you a link for exactly the thing you've been searching for.  Wouldn't it be nice to reward that person, with something more than just a few words of thanks?  Well now you can!

Currently in early prototype, the aim of of mark bot is to mark great contributions with appropriaterewards, using crypto currencies.

The first currency supported is the [Bitmark](https://github.com/project-bitmark/marking/wiki/).

The first iteration of the robot is based on the K.I.S.S. methodology in for proof of concept.  Further functionality will follow.  The flow is described beneath.

* Bot joins the channel
* Bot issues a greeting -- "Hi, Im markbot"
* Bot issues a challenge -- "I am giving away XXX Mark(s) for the first person to post a valid bitmark address"
* Bot waits for challenge to be fulfilled
* Bot pays reward
* Bot quits until next go


## Prerequisites

The robot is written in nodejs, and requires the irc module

    npm install irc
    

## To Run

    node markbot.js


## Where to Get Help

Please visit #bitmark on freenode IRC
