import { useReducer } from "react"
import { EntriesContext, entriesReducer } from "."
import { v4 as uuid } from 'uuid'
import { Entry, EntryStatus } from "@/interfaces"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuid(),
            description: 'pending  aodas da dasdsa dsad sa dasdasdassdasdas asdasdasda asdadasda',
            createdAt: Date.now(),
            status: 'pending'
        },
        {
            _id: uuid(),
            description: 'in-progress  aodas da dasdsa dsad sa dasdasdassdasdas asdasdasda asdadasda',
            createdAt: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            _id: uuid(),
            description: 'finished  aodas da dasdsa dsad sa dasdasdassdasdas asdasdasda asdadasda',
            createdAt: Date.now() - 10000,
            status: 'finished'
        },
    ]
}

export const EntriesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string, status : EntryStatus) => {
        const newEntry: Entry = {
            _id: uuid(),
            description,
            createdAt: Date.now(),
            status
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry
        }}>
            {children}
        </EntriesContext.Provider>
    );
}