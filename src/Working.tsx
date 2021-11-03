import React from "react";
import marked from "marked";
import dompurify from "dompurify";
import "./Working.css";

type WorkingState = {
    input: string
};

class Working extends React.Component<Record<string, never>, WorkingState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            input: "# This is an h1 heading\n## This is an h2 heading\n\n[This is a link](https://twitter.com/tassadaritze)\n\nThere's also inline code: `<div>`\nand, of course, block code:\n```\nif (true) {\n  return false;\n}\n```\n\n1. Ordered\n2. Lists\n\n* Unordered\n* Lists\n\n> Block\n> quotes\n\n*Emphasis,* **bold**\n\n![Embedded image](https://i.imgur.com/atkbU38.png)"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(): void {
        console.log(marked.parse(this.state.input));
    }

    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        this.setState({
            input: e.target.value
        })
    }

    render(): JSX.Element {
        return(
            <div className="Working">
                <textarea id="editor" onChange={this.handleChange} value={this.state.input} />
                <div id="arrow">&gt;</div>
                <div id="preview" dangerouslySetInnerHTML={{__html: dompurify.sanitize(marked.parse(this.state.input), { USE_PROFILES: { html: true } })}} />
            </div>
        )
    }
}

export default Working;