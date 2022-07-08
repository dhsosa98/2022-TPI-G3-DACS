import { configureStore } from '@reduxjs/toolkit'
import pagination from './features/paginationSlice'
export default configureStore({
  reducer: {
    pagination,
  },
})