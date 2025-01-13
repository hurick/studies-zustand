import { createContext } from 'react';
import { UserContextProvider } from './UserContextProvider'
import { IUserContext } from '@utilsTypes/user';

const UserContext = createContext<IUserContext | undefined>(undefined)

export { UserContext, UserContextProvider }
