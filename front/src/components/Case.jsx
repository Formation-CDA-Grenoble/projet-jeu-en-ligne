import React  from 'react';

class Case extends React.Component{ 

    state = {
        case1: null,
        case2: null,
        case3: null,
        case4: null,
        case5: null,
        case6: null,
        case7: null,
        case8: null,
        case9: null
    }

    handleClick = () => {
        this.setState({
            case1: "X"
        });

   

    };

    handlClick = () => {
        this.setState({
           case2: "X"
       })

    };

    render() {
        return (
            <React.Fragment>

<div className = "div">
    <div>
    <button className="bouton" onClick = {this.handleClick}>
        { this.state.case1 }
    </button >
    </div>

    <div>
    <button className="bouton" onClick = {this.handlClick}>
    { this.state.case2 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case3 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case4 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case5 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case6 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case7 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case8 }
    </button >
    </div>

    <div>
    <button className="bouton" >
    { this.state.case9 }
    </button >
    </div>

    
</div>   
         </React.Fragment>
    )}
}
        

export default Case;