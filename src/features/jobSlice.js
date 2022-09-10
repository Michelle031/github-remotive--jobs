import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filteredJobs: [],
  jobsToShow: [],
  current: 1,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setJobstoshow: (state, action) => {
      state.jobsToShow = action.payload;
    },
    setFiltered: (state, action) => {
      state.filteredJobs = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setJobs, setJobstoshow, setCurrent, setFiltered } =
  jobSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.jobs;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default jobSlice.reducer;
