import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const {tinymce} = window;


export default class EditorComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: props.value
        }
    }

    onChange = (e) => {
        this.props.onChange(e.target.getContent());
    };


    render() {
        return (
            <div>
                <Editor
                    value={this.state.content}
                    init={{
                        menubar: false,
                        branding: false,
                        statusbar: false,
                        theme: 'modern',
                        language: 'ru',
                        language_url: window.location.origin + '/js/tinymce/langs/ru.js',
                        removeformat : [
                            {selector : '*', remove: 'all'}
                        ]
                    }}
                    plugins='table textcolor colorpicker link anchor paste'
                    toolbar={
                        'undo redo | removeformat | bold italic underline strikethrough | subscript superscript | ' +
                        'table  quicklink blockquote | ' +
                        ' forecolor backcolor forecolorpicker | link anchor |  ' +
                        'alignleft alignright aligncenter alignjustify | ' +
                        'bullist numlist | fullscreen preview'
                    }
                    onChange={this.onChange}/>
            </div>
        );
    }
}
