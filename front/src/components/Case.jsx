import React  from 'react';

class Case extends React.Component{ 

    state = {
        case1: 0
    }

    handlClick = () => {
        this.setState({
            case1: this.state.case1 + 1
        })
    }

    render() {
        return (
            <React.Fragment>

<div className = "div">
    <div>
    <button className="bouton" onClick = {this.handlClick}>
        { this.state.case1 }
    </button >
    </div>

    <div>
    <button className="bouton" >
       2
    </button >
    </div>

    <div>
    <button className="bouton" >
        3
    </button >
    </div>

    <div>
    <button className="bouton" >
        4
    </button >
    </div>

    <div>
    <button className="bouton" >
        5
    </button >
    </div>

    <div>
    <button className="bouton" >
        6
    </button >
    </div>

    <div>
    <button className="bouton" >
        7
    </button >
    </div>

    <div>
    <button className="bouton" >
        8
    </button >
    </div>

    <div>
    <button className="bouton" >
        9
    </button >
    </div>

    
</div>   
         </React.Fragment>
    )}
}
        

export default Case;