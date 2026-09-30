(() => {
  'use strict';
  const panel = document.querySelector('.publication-filters');
  const search = document.querySelector('#paper-search');
  const year = document.querySelector('#paper-year');
  const buttons = [...document.querySelectorAll('[data-topic]')];
  const papers = [...document.querySelectorAll('.publication')];
  const count = document.querySelector('#paper-count');
  const empty = document.querySelector('.empty-state');
  if (!panel || !search || !year || !count || !empty) return;
  let topic = 'all';
  panel.hidden = false;
  const searchable = new Map(papers.map(p => [p, p.textContent.toLowerCase()]));
  function filter() {
    const query = search.value.trim().toLowerCase();
    let shown = 0;
    papers.forEach(p => {
      const matches = (!query || searchable.get(p).includes(query)) &&
        (year.value === 'all' || p.dataset.year === year.value) &&
        (topic === 'all' || p.dataset.topics.split(' ').includes(topic));
      p.hidden = !matches;
      shown += Number(matches);
    });
    count.textContent = shown + (shown === 1 ? ' publication' : ' publications') + ' / ' + papers.length;
    empty.hidden = shown !== 0;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.topic === topic)));
  }
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  buttons.forEach(button => button.addEventListener('click', () => { topic = button.dataset.topic; filter(); }));
  // Research links must still reveal a paper when a filter previously hid it.
  function revealLinkedPaper() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id.startsWith('pub-')) return;
    const paper = document.getElementById(id);
    if (!paper) return;
    if (paper.hidden) {
      search.value = '';
      year.value = 'all';
      topic = 'all';
      filter();
      paper.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', revealLinkedPaper);
  filter();
  revealLinkedPaper();
})();
