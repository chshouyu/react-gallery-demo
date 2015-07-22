
var React = require('react');

var Item = React.createClass({
    render () {
        return (
            <li>{ this.props.item.content }</li>
        );
    }
});

module.exports = Item;