import React from 'react';

class Child extends React.Component {
    
    chanheProps = () => {
        this.props.bb("msg4", "Get lost")
    }
    render(){
        return(
            <div style={{fontSize: '32px'}}>
                {this.props.msg} : How are you
                <button onClick={this.chanheProps}>New Msg</button>
            </div>
        )
    }
};

export default Child;