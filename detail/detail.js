import { getJob } from '../fetch-utils.js';
import { renderJobDetails } from '../render-utils.js';
const jobDetailContainer = document.getElementById('job-detail-container');

const params = new URLSearchParams(window.location.search);

async function loadData() {
    const data = await getJob(params.get('id'));
    const jobDiv = renderJobDetails(data);
    jobDetailContainer.append(jobDiv);
}
loadData();