import React from 'react';
import { Container } from 'semantic-ui-react'
import EnrtyLine from './EnrtyLine';

function EntryLines({ entries, deleteEntry, editEntry }) {
    return (
        <Container>

            {entries.map((entry) => (
                <EnrtyLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))
            }
        </Container>
    );
}

export default EntryLines;