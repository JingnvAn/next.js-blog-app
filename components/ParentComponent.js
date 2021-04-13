import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(paramFromChild){
        alert(`message send out from ParentComponent, has a param from child: ${paramFromChild}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

