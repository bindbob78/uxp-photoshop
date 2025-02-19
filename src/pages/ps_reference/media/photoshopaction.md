---
id: "photoshopaction"
title: "photoshopAction"
sidebar_label: "photoshopAction"
repo: "uxp-photoshop"
product: "photoshop"
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
---

# photoshopAction

The module that facilitates Actions being performed in the
UXP-Photoshop world. You may perform your own `batchPlay` commands,
or attach listeners using this module.

```javascript
var PhotoshopAction = require('photoshop').action;
```

## Functions

### addNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

Attach a listener to a Photoshop event. A callback in the form
of `(eventName: string, descriptor: Descriptor) => void` will be performed.
```javascript
await PhotoshopAction.addNotificationListener(['open'], onOpenNewDocument)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `notifier` | NotificationListener |

___

### batchPlay
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<[*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[]\>

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
var commands = [{ _obj: 'hide', _target: target }]
await PhotoshopAction.batchPlay(commands)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | [*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[] |
| `options?` | [*BatchPlayCommandOptions*](/ps_reference/interfaces/batchplaycommandoptions/) |

___

### batchPlaySync
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

[*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[]

Performs a batchPlay call with the provided commands. Equivalent
to an `executeAction` in ExtendScript.
```javascript
var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
var commands = [{ _obj: 'hide', _target: target }]
await PhotoshopAction.batchPlay(commands)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | [*ActionDescriptor*](/ps_reference/interfaces/actiondescriptor/)[] |
| `options?` | [*BatchPlayCommandOptions*](/ps_reference/interfaces/batchplaycommandoptions/) |

___

### getIDFromString
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">24.0</span>

*number*

Return the identifier number assigned to an action string value.
If the string is not already registered, a new ID will be created and returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *string* |

___

### removeNotificationListener
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.0</span>

*Promise*<void\>

Detaches a listener from a Photoshop event.
See [addNotificationListener](#addNotificationListener)
```javascript
await PhotoshopAction.removeNotificationListener(['open'], onOpenNewDocument)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | *string*[] |
| `notifier` | NotificationListener |

___

### validateReference
<span class="minversion" style="display: block; margin-bottom: -1em; margin-left: 36em; float:left; opacity:0.5;">23.1</span>

*boolean*

Synchronously validates the given action reference, returning true if it still
exists. For example, calling this with a closed document would return false.

This feature is intended for advanced developers who understand well how batchPlay works.
Validate reference could get handy when you want to add new DOM functionality or use low-level code for
performance optimization.

See [Action references](../batchplay#action-references) for details.

Supported reference classes:
`action`,
`document`,
`channel`,
`layer`,
`guide`,
`historyState`,
`compsClass`,
`path`,
`actionSet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | ActionReference \| ActionReference[] |
