
require('../css/gallery.less');

var React = require('react');

var IScroll = require('iScroll');

var windowWidth = window.innerWidth;

var Gallery = React.createClass({
    getInitialState () {
        return {
            currPage: this.props.initImgIndex
        };
    },
    componentDidMount () {
        this.iscrollInstance = new IScroll(React.findDOMNode(this), {
            eventPassthrough: true,
            scrollX: true,
            scrollY: false,
            snap: true,
            momentum: false
        });

        this.iscrollInstance.on('scrollEnd', () => {
            this.setState({
                currPage: this.iscrollInstance.currentPage.pageX
            });
        });

        this.iscrollInstance.goToPage(this.state.currPage, 0, 0);
    },
    componentWillUnmount () {
        this.iscrollInstance.destroy();
        this.iscrollInstance = null;
    },
    render () {

        var imgNodes = this.props.imgList.map((img, index) => {
            return (
                <li key={ index } onClick={ this.props.hideGallery } style={ {width: `${ windowWidth }px`} }>
                    <img src={ img } />
                </li>
            );
        });

        var listStyle = {
            width: `${ this.props.imgList.length * windowWidth }px`
        };

        return (
            <div className="gallery">
                <ul style={ listStyle }>{ imgNodes }</ul>
                <div className="pager">{ this.state.currPage + 1 } / { this.props.imgList.length }</div>
            </div>
        );
    }
});

module.exports = Gallery;