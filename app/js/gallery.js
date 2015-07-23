
require('../css/gallery.less');

var React = require('react');

var cx = React.addons.classSet;

var windowWidth = window.innerWidth;

var Gallery = React.createClass({
    getInitialState () {
        return {
            isShow: false
        };
    },
    componentWillReceiveProps (nextProps) {
        if (nextProps.currIndex > -1) {
            this.setState({
                isShow: true
            });
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
            </div>
        );
    }
});

module.exports = Gallery;