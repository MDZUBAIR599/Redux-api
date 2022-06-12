import {legacy_createStore} from 'redux'
import { TodoReducer } from './Todoreducer'
export const store=legacy_createStore(TodoReducer)