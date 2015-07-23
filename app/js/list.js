
require('../css/list.less');

var React = require('react');

var util = require('./util.js');

var Item = require('./item.js');
var Gallery = require('./gallery.js');

var ListView = React.createClass({
    getInitialState () {
        return {
            list: [],
            itemIndex: 0,
            imgIndex: -1
        };
    },
    componentDidMount () {
        util.ajax('data/list.json').then((list) => {
            if (list && util.isArray(list)) {
                this.setState({
                    list: list
                });
            }
        });
    },
    showGallery (itemIndex, imgIndex) {
        this.setState({
            itemIndex: itemIndex,
            imgIndex: imgIndex
        });
    },
    render () {

        var nodes = this.state.list.map((item, index) => <Item key={ index } item={ item } showGallery={ this.showGallery.bind(null, index) } />);

        var currNode = this.state.list[this.state.itemIndex];

        var imgList = currNode ? currNode.imgList : [];

        return (
            <div>
                <ul className="list">{ nodes }</ul>
                <Gallery imgList={ imgList } currIndex={ this.state.imgIndex } />
            </div>
        );
    }
});

module.exports = ListView;