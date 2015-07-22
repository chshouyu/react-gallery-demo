
require('../css/base.less');


var React = require('react');

var ListView = require('./list.js');

var App = React.createClass({

    render () {

        return (
            <ListView />
        );
    }
});

React.render(<App />, document.querySelector('#wrapper'));