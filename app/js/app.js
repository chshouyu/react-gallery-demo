
require('../scss/base.scss');


var React = require('react');

var Timer = require('./timer.js')
var ListView = require('./list.js');

var App = React.createClass({

    render () {

        return (
            <div>
                <Timer />
                <ListView />
            </div>
        );
    }
});

React.render(<App />, document.querySelector('#wrapper'));