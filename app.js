// import functions and grab DOM elements
import { getJobs } from './fetch-utils.js';
import { renderJob } from './render-utils.js';

const jobListContainer = document.getElementById('job-list-details');
// let state

async function loadData() {
    const jobs = await getJobs();
    for (let job of jobs) {
        const jobDiv = renderJob(job);
        jobListContainer.append(jobDiv);
    }
}
loadData();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
