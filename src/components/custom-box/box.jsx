import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Velocity from 'velocity-animate';

class Box extends Component {

    state = {
        isCollapsed : false
    }

    constructor(props){
        super(props);
        this.box = React.createRef();
        this.boxBody = React.createRef();
        if(props.boxTools){
            props.boxTools.forEach(element => {
                if(element === 'collapse') this.isCollapsed = true;
            });
        }
    }
   


    toggleCollapse = (e) =>{
        const { isCollapsed } = this.state;
        Velocity.animate(this.boxBody.current, isCollapsed ? 'slideDown' : 'slideUp', {
            duration: 500,
            easing: 'easeInSine',
            complete: this.toggleAnimationComplete
        });
    }

    toggleAnimationComplete = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    removeBox = () =>{
        Velocity.animate(this.box.current, 'slideUp', {
            duration: 500,
            easing: 'easeInSine'
        });
    }

    render() {

        const { loading, footer, border } = this.props;
        const {isCollapsed} = this.state;
        return (
            <div  className={"col-md-" + this.props.width + " col-sm-6 col-xs-12"}>
                <div ref={this.box} className={"box " + this.props.theme + " " + (border ? "box-solid" : "") + " color-palette-box " + (isCollapsed ? "collapsed-box" : "")}>
                    <div className="box-header with-border">
                        <h3 className="box-title">{this.props.headerMarkup} {this.props.title}</h3>
                        <div className="box-tools pull-right">{
                            !this.props.boxTools ? null : this.props.boxTools.map((tool, index) => (
                                tool === 'expand' ?
                                    <button key={index} className="btn btn-box-tool" data-widget="expand" onClick={this.toggleCollapse}><i className={isCollapsed ? "fa fa-plus" : "fa fa-minus"}></i></button>
                                    : (tool === 'collapse' ?
                                        <button key={index} className="btn btn-box-tool" data-widget="collapse" onClick={this.toggleCollapse}><i className={isCollapsed ? "fa fa-plus" : "fa fa-minus"}></i></button>
                                        : <button key={index} className="btn btn-box-tool" data-widget="remove" onClick={this.removeBox}><i className="fa fa-times"></i></button>)
                            ))
                        }</div>
                    </div>
                    <div ref={this.boxBody} className="box-body">
                        {this.props.content}
                        {this.props.children}
                    </div>

                    {footer && <div className="box-footer">{this.props.footer}</div>}
                    {/* /.box-body */}
                    {loading && <div className="overlay">
                        <i className="fa fa-refresh fa-spin"></i>
                    </div>}
                </div>
            </div>
        );
    }

}

Box.defaultProptypes = {
    theme: 'box-default',
    loading: false,
    border: true,
    title: 'Default title',
    content: '',
};

Box.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.string,
    content: PropTypes.string,
    loading: PropTypes.bool,
    border: PropTypes.bool,
};

export default Box;