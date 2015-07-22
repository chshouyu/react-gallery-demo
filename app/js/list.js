
require('../css/list.less');

var React = require('react');

var util = require('./util.js');

var Item = require('./item.js');

var ListView = React.createClass({
    getInitialState () {
        return {
            list: []
        };
    },
    componentDidMount () {
        util.ajax('/data/list.json').then((list) => {
            if (list && util.isArray(list)) {
                this.setState({
                    list: list
                });
            }
        });
    },
    render () {
        var nodes = this.state.list.map((item, index) => <Item key={ index } item={ item } />);
        return (
            <ul className="list">{ nodes }</ul>
        );
    }
});

module.exports = ListView;