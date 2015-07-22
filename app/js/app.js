
require('../css/base.less');


var React = require('react');

var App = React.createClass({

    render () {

        return (
            <div>hello</div>
        );
    }
});

React.render(<App />, document.querySelector('#wrapper'));