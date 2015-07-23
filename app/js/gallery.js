
require('../css/gallery.less');

var React = require('react');

var IScroll = require('./lib/iscroll-probe.js');

var cx = React.addons.classSet;

var windowWidth = window.innerWidth;
var iscrollInstance = null;

var Gallery = React.createClass({
    getInitialState () {
        return {
            isShow: false,
            currPage: 0
        };
    },
    componentWillReceiveProps (nextProps) {

        if (nextProps.currIndex > -1) {
            this.setState({
                isShow: true,
                currPage: nextProps.currIndex
            }, () => {
                if (!iscrollInstance) {
                    iscrollInstance = new IScroll(React.findDOMNode(this), {
                        eventPassthrough: true,
                        scrollX: true,
                        scrollY: false,
                        snap: true,
                        momentum: false
                    });

                    iscrollInstance.on('scrollEnd', () => {
                        this.setState({
                            currPage: iscrollInstance.currentPage.pageX
                        });
                    });
                }

                iscrollInstance.refresh();
                
                iscrollInstance.goToPage(this.props.currIndex, 0, 0);
            });
        }
        
    },
    componentWillUnmount () {
        if (iscrollInstance) {
            iscrollInstance.destroy();
            iscrollInstance = null;
        }
    },
    hide () {
        this.setState({
            isShow: false
        });
    },
    render () {

        var imgNodes = this.props.imgList.map((img, index) => {
            return (
                <li key={ index } onClick={ this.hide } style={ {width: `${ windowWidth }px`} }>
                    <img src={ img } />
                </li>
            );
        });

        var listStyle = {
            width: `${ this.props.imgList.length * windowWidth }px`
        };

        var classes = cx({
            'gallery': true,
            'show': this.state.isShow
        });

        return (
            <div className={ classes }>
                <ul style={ listStyle }>{ imgNodes }</ul>
                <div className="pager">{ this.state.currPage + 1 } / { this.props.imgList.length }</div>
            </div>
        );
    }
});

module.exports = Gallery;