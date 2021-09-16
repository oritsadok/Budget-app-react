import React from 'react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel"
import { Form, Segment, Checkbox } from "semantic-ui-react"
import EntryForm from './EntryForm'

function NewEntryForm({
    addEntry,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense
}) {


    return (
        <Form unstackable>
            <EntryForm
                description={description}
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
            <Segment compact>
                <Checkbox
                    toggle
                    label="is expense"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
            <ButtonSaveOrCancel
                addEntry={addEntry}

            />
        </Form>
    )
}

export default NewEntryForm;