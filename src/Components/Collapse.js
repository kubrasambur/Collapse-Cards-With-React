import React from 'react'
import { UncontrolledCollapse, Button} from 'reactstrap';

function Collapse(props) {
    return (
        <div>
            <Button color="primary w-100" id={props.href} style={{marginBottom: '1rem' }}>
      Toggle
    </Button>
    <UncontrolledCollapse toggler={"#".concat(props.href)}>
      {props.children}
    </UncontrolledCollapse>
        </div>
    )
}

export default Collapse
