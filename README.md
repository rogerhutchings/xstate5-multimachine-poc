# XState Multi-machine PoC

## Getting started

```sh
npm install
npm run dev
```

## Description

This is a quick proof of concept to work out how the XState inspection tools deal with multiple actors that aren't part of the same actor system.

In KP, we have one main actor system (which is a relatively new concept brought in with XState 5). However, for realtime dashboards we're trying to avoid this, for code portability reasons: components should be as standalone as possible.

Turns out multiple actors are rendered in the same way as they would be if they were part of a system, but hey, we didn't _know_ that before!
