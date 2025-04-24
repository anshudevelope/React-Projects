import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'
import themereducer from '../Features/Theme/ThemeSlice'
import todoReducer from '../Features/ToDo/TodoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themereducer,
    todos: todoReducer,
  },
})


// Steps
// Create Store
// wrap app component under Provider in main.jsx file
// create Slice
// register reducer in store