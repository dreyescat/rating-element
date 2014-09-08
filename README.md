# &lt;rating-element&gt;

A rating web component using [polymer](http://www.polymer-project.org/) a la python [range](https://docs.python.org/3/library/stdtypes.html#ranges).

Rating element can use symbols provided by an external source, like:

* `Font Awesome by Dave Gandy - http://fontawesome.io`. Check [fontawesome](http://fortawesome.github.io/Font-Awesome/icons/) for a list of available symbols.

* `Typicons by Stephen Hutchings - http://typicons.com/`. Check [typicons](http://typicons.com/) for a list of available symbols.

* If you are already using [Bootstrap](http://getbootstrap.com/), then you have a set of [glyphicons](http://getbootstrap.com/components/) at your disposal.

* Or you can even generate and customize your own set of symbols with [fontello](http://fontello.com/).

## Demo

See [rating-element](http://dreyescat.github.io/rating-element/rating-element/demo.html) in action.

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

Attribute     | Options     | Default              | Description
---           | ---         | ---                  | ---
`start`       | *number*    | 0                    | The `start` attribute sets the starting value.
`stop`        | *number*    | 5                    | The `stop` attribute sets the stop value. The stop value is not included.
`step`        | *number*    | 1                    | The `step` attribute specifies the increment or decrement.
`readonly`    | *bool*      | false                | The `readonly` attribute indicates that the user cannot modify the value of the control.
`value`       | *number*    | undefined            | The `value` attribute holds the current value in the control.
`symbols`     | *string*    | undefined            | The `symbols` attribute specifies the href of the css with the set of symbols (a.k.a. glyphs) for empty and filled states.
`empty`       | *string*    | symbol symbol-empty  | The `empty` attribute indicates the classes to be applied to the rating symbols when empty.
`filled`      | *string*    | symbol symbol-filled | The `filled` attribute indicates the classes to be applied to the rating symbols when filled.

## Events

Event         | Description
---           | ---
`change`      | Fired when a change to the rating value is committed by the user. It is not fired if the value is changed using the value attribute.


See the [documentation](http://dreyescat.github.io/rating-element/) for more info.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server. It should open the component page on your default browser. If it si not the case, open `http://localhost:8000`.

    ```sh
    $ grunt serve
    ```

* To provide a live demo, deploy everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/dreyescat/rating-element/releases).

## License

[MIT License](https://github.com/dreyescat/rating-element/blob/master/LICENSE.md)
