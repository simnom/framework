import * as React from 'react';
import {Field} from './common';
import Label from '../labels/Label';

/**
 * Text field component.
 */
class TextField extends React.Component <FieldProps> {
    constructor(props: FieldProps) {
        super(props);
    }

    /**
     * Render component UI.
     */
    render() {
        return (
            <Field>
                <div className="themosis__column__label">
                    <Label text={this.props.field.label.inner} />
                </div>
                <div className="themosis__column__content">
                    <input type="text"/>
                </div>
            </Field>
        );
    }
}

export default TextField;