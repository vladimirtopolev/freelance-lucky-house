import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';


export default class Editor extends Component {
    onChange = (e) => {
        this.props.onChange(e.target.getContent());
    };

    render() {
        return (
            <div>
                <TinyMCE
                    content={this.props.value}
                    config={{
                        menubar: false,
                        branding: false
                    }}
                    onChange={this.onChange}/>
            </div>
        );
    }
}