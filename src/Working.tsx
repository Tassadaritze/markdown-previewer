import React from "react";
import "./Working.css";

class Working extends React.Component<Record<string, never>> {
    constructor(props: Record<string, never>) {
        super(props);
    }

    render(): JSX.Element {
        return(
            <div className="Working">
                <textarea id="editor">test1</textarea>
                <div id="arrow">&gt;</div>
                <textarea id="preview" readOnly={true}>test2</textarea>
            </div>
        )
    }
}

export default Working;