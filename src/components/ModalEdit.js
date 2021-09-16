import React from 'react';
import { Modal, Button } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({ isOpen,
    setIsOpen,
    addEntry,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense
}) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense}
                />
                <Modal.Actions>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                    <Button onClick={() => setIsOpen(false)} primary>Ok</Button>

                </Modal.Actions>
            </Modal.Content>

        </Modal>
    );
}

export default ModalEdit;