
var React = require('react');

var Item = React.createClass({

    render () {

        var imgNodes = this.props.item.imgList.map((src, index) => {
            return (
                <a href="javascript:;" key={ index }>
                    <img src={ src } />
                </a>
            );
        });

        return (
            <li>
                <p>{ this.props.item.content }</p>
                <div className="img-list">
                    { imgNodes }
                </div>
            </li>
        );
    }
});

module.exports = Item;