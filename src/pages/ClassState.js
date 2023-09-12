import React, {Component} from "react";


class ClassState extends Component {
    
    // constructor initialize an object's state in class
    constructor () {
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol: "red"
        };

        this.changeElement = this.changeElement.bind(this);
        // binding method!
    }

    changeElement(){
        // document.getElementById("sampleElement").innerHTML = "WoW Iba ka na!";
        // this.setState({sampleContent: "Wow Iba Na!"})
        // this.setState({bgcol: "yellow"})
       this.state.bgcol === "red" ? this.setState({sampleContent: "Wow Iba Talaga!", bgcol: "yellow"}) : this.setState({bgcol: "red"});
    }
    render(){
        const {bgcol, sampleContent} = this.state;
        // for destructuring state
        return(
            <>
                <h1 id="sampleElement" style={{background: bgcol}}>{sampleContent}</h1>
                <button onClick={this.changeElement}>Change Sample Element</button>
                {/* <button onClick={() => this.changeElement()}>Change Sample Element</button> */}
            </>
        );
    }
}

export default ClassState;