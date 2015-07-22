
require('../css/list.less');

var React = require('react');

var Item = require('./item.js');

var ListView = React.createClass({
    getInitialState () {
        return {
            list: []
        };
    },
    componentDidMount () {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.status === 200 || this.status === 304) {
                if (Array.isArray(this.response)) {
                    self.setState({
                        list: this.response
                    });
                }
            }
        };
        xhr.open('GET', '/data/list.json', true);
        xhr.responseType = 'json';
        xhr.send();
    },
    render () {
        var nodes = this.state.list.map((item, index) => <Item key={ index } item={ item } />);
        return (
            <ul className="list">{ nodes }</ul>
        );
    }
});

module.exports = ListView;