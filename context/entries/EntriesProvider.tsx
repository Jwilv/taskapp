import { EntriesContext } from "./EntriesContext"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const EntriesProvider = ({ children }: Props) => {
    <EntriesContext.Provider value={{ entries: [] }}>
        { children }
    </EntriesContext.Provider>
}