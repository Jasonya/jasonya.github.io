/* Optional public GitHub star counts. Repo links work without JavaScript. */
(() => {
  const links = Array.from(document.querySelectorAll('.stars[data-repo]'));
  const repos = new Set(links.map(link => link.dataset.repo));
  const formatCount = count => count < 1000 ? String(count) : `${(count / 1000).toFixed(count < 10000 ? 1 : 0).replace(/\.0$/, '')}k`;
  const render = (repo, count) => {
    for (const link of links.filter(item => item.dataset.repo === repo)) {
      link.querySelector('.count').textContent = formatCount(count);
      link.classList.add('loaded');
      link.setAttribute('title', `${count.toLocaleString()} GitHub stars`);
      link.setAttribute('aria-label', `${repo}: ${count.toLocaleString()} GitHub stars`);
    }
  };
  for (const repo of repos) {
    if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) continue;
    const cacheKey = `profile-stars:${repo}`;
    let cached;
    try { cached = JSON.parse(sessionStorage.getItem(cacheKey)); } catch (_) {}
    if (cached && Number.isInteger(cached.count) && cached.count >= 0 && Date.now() - cached.time < 3600000) {
      render(repo, cached.count);
      continue;
    }
    fetch(`https://api.github.com/repos/${repo}`)
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => {
        const count = data.stargazers_count;
        if (!Number.isInteger(count) || count < 0) return;
        render(repo, count);
        try { sessionStorage.setItem(cacheKey, JSON.stringify({count, time: Date.now()})); } catch (_) {}
      })
      .catch(() => { /* Preserve the plain repository link if GitHub is unavailable. */ });
  }
})();
