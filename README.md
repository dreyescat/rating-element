# &lt;rating-element&gt;

A rating web component using [polymer](http://www.polymer-project.org/) a la python [range](https://docs.python.org/3/library/stdtypes.html#ranges).

## Demo

See [rating-element](http://dreyescat.github.io/rating-element/components/rating-element/demo.html) in action.

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install rating-element --save
```

Or [download as ZIP](https://github.com/dreyescat/rating-element/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Rating Element:

    ```html
    <link rel="import" href="bower_components/rating-element/rating-element.html">
    ```

3. Start using it!

    ```html
    <rating-element></rating-element>
    ```

## Attributes

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`start`       | *number*    | 0            | The `start` attribute sets the starting value.
`stop`        | *number*    | 5            | The `stop` attribute sets the stop value. The stop value is not included.
`step`        | *number*    | 1            | The `step` attribute specifies the increment or decrement.
`readonly`    | *bool*      | false        | The `readonly` attribute indicates that the user cannot modify the value of the control.

See the [documentation](http://dreyescat.github.io/rating-element/) for more info.
