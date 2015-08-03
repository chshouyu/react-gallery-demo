
var React = require('react');

var cx = React.addons.classSet;

var Item = React.createClass({
    getInitialState () {
        return {
            showAll: false,
            contentHeight: 0
        };
    },
    componentDidMount () {
        var contentNode = React.findDOMNode(this.refs.content);
        this.setState({
            contentHeight: contentNode.clientHeight
        });
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
        var showMore = this.state.contentHeight > 48;

        var moreClasses = cx({
            'more': true,
            'open': this.state.showAll
        });

        var contentClasses = cx({
            'close': !this.state.showAll && showMore
        });

        return (
            <li>
                <p className={ contentClasses } ref="content" onClick={ showMore ? this.toggleAll : null }>{ content }</p>
                <div className="img-list">
                    { imgNodes }
                </div>
                { showMore ? <a href="javascript:;" className={ moreClasses } onClick={ this.toggleAll }></a> : null }
            </li>
        );
    }
});

module.exports = Item;