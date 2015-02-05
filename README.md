meteor-async-template-helpers
============================

Use asynchronous functions inside your template helpers

## Install

Install using Meteor:

```sh
$ meteor add hpx7:async-template-helpers
```

## Usage

```javascript
RegisterAsyncHelper(options, fn)
```
```options.template```: The template on which the helper is to be registered.

```options.helperName```: The name of the helper function

```options.shared```: A boolean, controlling whether an autorun should be created for each instance of ```options.template``` or just once.

```fn```: The asynchronous helper. This function will be called reactively, and it will recieve a callback as an agrument to pass its value into.

## Example

```javascript
RegisterAsyncHelper({template: Template.search, helperName: 'searchResults', shared: true}, function (cb) {
  var query = 'someReactiveValue';
  Meteor.call('getSearchResults', query, function (err, result) {
    if (err)
      console.error(err);
    else
      callback(result); // accessible via {{#each searchResults}} inside Template.search
  });
});
```
