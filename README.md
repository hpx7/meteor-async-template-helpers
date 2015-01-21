meteor-async-template-helpers
============================

Control YouTube's embedded player using Meteor

## Install

Install using Meteor:

```sh
$ meteor add hpx7:async-template-helpers
```

## Usage

The `RegisterAsyncHelper` takes three parameters: the template on which the helper is to be registered, the name of the helper function, and the asynchronous helper itself. The async helper function will be called reactively, and it will recieve a callback as an agrument to pass its value into.

## Example

```javascript
RegisterAsyncHelper(Template.search, 'searchResults', function (callback) {
  var query = 'someReactiveValue';
  Meteor.call('getSearchResults', query, function (err, result) {
    if (err)
      console.error(err);
    else
      callback(result); // accessible via {{> searchResults}} inside Template.search
  });
});
```
