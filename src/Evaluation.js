import React from 'react'

const Evaluation = props => {

    const handleSubmit = (ev) => {
        props.addEval(Object.assign(props.recInfo, ev));
        if (props.stage >= props.length) {
            props.moveToNextStage("end");
        } else {
            props.moveToNextStage();
        }
    }

    return (<div className="evaluation">
        <button onClick={handleSubmit.bind(this, {"evaluation": "native"})}>Polak</button>
        <button onClick={handleSubmit.bind(this, {"evaluation": "non-native"})}>Obcokrajowiec</button>
    </div>
    );
}

export default Evaluation;