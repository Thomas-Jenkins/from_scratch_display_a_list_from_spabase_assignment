export function renderJob(job) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('item');

    p.textContent = job.company;
    a.href = `./detail/?id=${job.id}`;
    img.src = `./assets/assets/${job.id}.png`;

    div.append(img, p);

    a.append(div);

    return a;
}

export function renderJobDetails(job) {
    const div = document.createElement('div');
    const companyEl = document.createElement('h2');
    const descriptionEl = document.createElement('p');
    const titlesEL = document.createElement('div');
    const firstTitleEl = document.createElement('p');
    const lastTitleEl = document.createElement('p');
    const dutiesEl = document.createElement('div');
    const tenureEl = document.createElement('div');

    div.classList.add('detail-card');

    companyEl.textContent = job.company;

    descriptionEl.textContent = job.description;

    firstTitleEl.textContent = job.firstTitle;
    
    lastTitleEl.textContent = job.lastTitle;

    dutiesEl.textContent = job.duties;

    tenureEl.textContent = job.tenure;

    div.append(companyEl, descriptionEl, titlesEL, dutiesEl, tenureEl);
    titlesEL.append(firstTitleEl, lastTitleEl);

    return div;
}