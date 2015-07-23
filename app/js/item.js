
var React = require('react');

var cx = React.addons.classSet;

var CONTENT_LENGTH = 36;

var Item = React.createClass({
    getInitialState () {
        return {
            showAll: false
        };
    },
    toggleAll () {
        this.setState((state) => {
            return {
                showAll: !state.showAll
            };
        });
    },
    render () {

        var imgNodes = this.props.item.imgList.map((src, index) => {
            return (
                <a href="javascript:;" key={ index } onClick={ this.props.showGallery.bind(null, index) }>
                    <img src={ src } />
                </a>
            );
        });

        var content = this.props.item.content;
        var showMore = content.length > CONTENT_LENGTH;

        var classes = cx({
            'more': true,
            'open': this.state.showAll
        });

        return (
            <li>
                <p onClick={ showMore ? this.toggleAll : null }>{ this.state.showAll ? content : content.slice(0, CONTENT_LENGTH) }</p>
                <div className="img-list">
                    { imgNodes }
                </div>
                { showMore ? <a href="javascript:;" className={ classes } onClick={ this.toggleAll }></a> : null }
            </li>
        );
    }
});

module.exports = Item;