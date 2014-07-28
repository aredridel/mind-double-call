Name
====

`mind-double-call`

Synopsis
========

```
var mindDoubleCall = require('mind-double-call');

thingThatMightCallTwice(mindDoubleCall(callback));
```

Description
===========

Will log a warning if the callback is called twice.
