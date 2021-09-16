import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react'


function EntryForm({ description, value, setDescription, setValue }) {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={12}
                    label='Description'
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
        </Fragment>
    );
}

export default EntryForm;