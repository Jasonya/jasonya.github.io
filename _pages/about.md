---
layout: profile
permalink: /
title: ""
description: "Wei-Chieh Huang is a Ph.D. student at the University of Illinois Chicago working on agent memory, interactive evaluation, deep research, and human–agent collaboration."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<header class="intro" id="about-me">
  <div>
    <h1 class="name" id="wei-chieh-huang">Wei-Chieh Huang<span class="zh" lang="zh-Hant">黃偉杰</span></h1>
    <p>I am a Ph.D. student in Computer Science at <a href="https://www.uic.edu/"><img class="logo" src="{{ '/images/profile-icons/uic.png' | relative_url }}" alt="">the University of Illinois Chicago</a>, advised by Professor <a href="https://scholar.google.com/citations?user=D0lL1r0AAAAJ">Philip S. Yu</a> in the <a href="https://bdsc-uic.github.io/">BDSC lab</a>. I am currently an Applied Scientist Intern at <span class="nowrap"><a href="https://www.amazon.science/"><img class="logo" src="{{ '/images/profile-icons/amazon.png' | relative_url }}" alt="">Amazon</a> Quick</span>, building multi-agent software generation systems for sandbox environment creation.</p>
    <p>My research focuses on agent memory, interactive evaluation, deep research, and human–agent collaboration.</p>
    <p>Expected graduation: May 2028. I am actively looking for Research Internship opportunities in Summer 2027. Feel free to reach out!</p>
    <nav class="contact" aria-label="Academic and professional profiles">
      <a href="{{ site.author.googlescholar }}" title="Google Scholar"><img src="{{ '/images/profile-icons/google_scholar.png' | relative_url }}" alt="Google Scholar"></a>
      <a href="{{ site.author.dblp }}" title="DBLP" aria-label="DBLP"><i class="ai ai-dblp contact-dblp" aria-hidden="true"></i></a>
      <a href="https://github.com/{{ site.author.github }}" title="GitHub"><img src="{{ '/images/profile-icons/github_s.jpg' | relative_url }}" alt="GitHub"></a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/" title="LinkedIn"><img src="{{ '/images/profile-icons/LinkedIn_s.png' | relative_url }}" alt="LinkedIn"></a>
      <a href="{{ site.author.orcid }}" title="ORCID"><img src="{{ '/images/profile-icons/orcid.png' | relative_url }}" alt="ORCID"></a>
    </nav>
    <div class="email">Email: <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a> &nbsp;|&nbsp; <a href="{{ '/files/Wei-Chieh-Huang-CV.pdf' | relative_url }}">CV (PDF)</a> &nbsp;|&nbsp; Chicago, IL</div>
  </div>
  <figure class="photo">
    <img src="{{ '/images/jason.jpeg' | relative_url }}" alt="Wei-Chieh Huang" width="576" height="565" fetchpriority="high">
    <figcaption>University of Illinois Chicago</figcaption>
  </figure>
</header>

<section>
  <h2 id="-news">News</h2>
  <div class="rows">
    {% for item in site.data.news limit:3 %}<div class="row"><span class="date">{{ item.date }}</span><div>{{ item.text }}</div></div>{% endfor %}
  </div>
  <details class="more">
    <summary>Earlier news</summary>
    <div class="rows">
      {% for item in site.data.news offset:3 %}<div class="row"><span class="date">{{ item.date }}</span><div>{{ item.text }}</div></div>{% endfor %}
    </div>
  </details>
</section>

<section>
  <h2 id="-selected-publications">Selected Papers<span class="aside"><a href="{{ site.author.googlescholar }}">full list on Google Scholar</a></span></h2>
  {% include selected-publications.html %}
</section>

<section markdown="1">
<h2 id="-research-interests">Research Interests</h2>

- Agentic Memory & Lifelong Personalization: Memory and retrieval for long-horizon agents, self-evolving skills, and lifelong personalization.
  <span class="research-papers">Related work: [Harness the Memory](#pub-huang2026harnessmemory), [Memory Survey](#pub-huang2025rethink), [MemoryCD](#pub-wz2026memory), [MemAudit](#pub-ma2026memprobe), [HyperSkill](#pub-xu2026hyperskill)</span>
- Agent Evaluation & Interactive Benchmarking: Benchmarks for long-horizon tasks, human participation, interruption, and mid-task steering.
  <span class="research-papers">Related work: [JARVIS-Bench](#pub-zhang2026jarvisbench), [HAS-Bench](#pub-wu2026hasbench), [InterruptBench](#pub-zou2026whenusers), [RECODE-H](#pub-miao2025recode)</span>
- Agentic Deep Research, Tool Use & RL: Search and reasoning agents, agentic RAG, reinforcement learning, and multi-stage safety guardrails.
  <span class="research-papers">Related work: [DeepResearchGuard](#pub-huang2025deepresearchguard), [Deep Research Survey](#pub-zhang2025deep), [RAG Survey](#pub-li2025towards), [CoEvoSkills](#pub-zhang2026evoskills), [Data Synthesis Survey](#pub-zhang2026datasynth), [Action Bottleneck](#pub-he2026action)</span>
- Human–Agent Collaboration & Trustworthy Systems: Human feedback, multi-agent debate and coordination, and trustworthy, personality-aware interaction.
  <span class="research-papers">Related work: [MADIAVE](#pub-huang2025madiave), [Human–Agent Survey](#pub-zoullm), [Autonomous Driving Survey](#pub-wu2025multi), [Collaborative Intelligence](#pub-zou2025call), [PSG-Agent](#pub-wu2025psg), [RECODE-H](#pub-miao2025recode), [XBridge](#pub-yang2026xbridge)</span>

</section>

<section>
  <h2 id="-full-publication-list">All Publications<span class="aside">* Equal contribution.</span></h2>
  <div class="rows papers all-publications">
    {% for paper in site.data.publications %}
    <div class="row paper" id="{{ paper.id }}">
      <span class="date">{{ paper.year }}</span>
      <div>
        <a class="title" href="{{ paper.url }}">{{ paper.title }}</a>
        <div class="authors">{{ paper.authors }}</div>
        <div class="meta">{{ paper.meta }}</div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<section markdown="1">
<h2 id="-educations">Education</h2>

- *2024.08–Present*, Ph.D. in Computer Science, University of Illinois Chicago (UIC), US. Expected graduation: **May 2028**.
- *2020.09 - 2022.12*, M.S. in Systems Engineering, Cornell University, US.
- *2013.09 - 2017.06*, B.S. in Chemical Engineering, National Taiwan University of Science and Technology (NTUST), Taiwan.
</section>

<section markdown="1">
<h2 id="-work-experience">Work Experience</h2>

- **Amazon — Amazon Quick** — Applied Scientist Intern, Seattle, WA. *Sep. 2026–Present*
  - Build an end-to-end multi-agent software generation system for Amazon Quick, integrating task planning, code synthesis, tool orchestration, and execution to automate sandbox environment creation.
  - Optimize tool selection and invocation, agent memory and retrieval, multi-agent communication topology, execution harnesses, and loop engineering through self-improving workflows and recursive self-improvement (RSI).
- **GEICO — Research & Innovation** — Data Scientist, Chevy Chase, MD. *Jan. 2022–Dec. 2023*
  - Built an automatic multimodal document-verification pipeline that fuses textual information and visual patterns via a BERT and CNN fusion model, achieving 98% overall accuracy for insurance customer verification.
  - Designed and deployed an underwriting ML pipeline to detect potential insurance fraud, reducing the overall loss ratio by 3.5% and generating projected annual savings of $60M.
</section>

<section markdown="1">
<h2 id="-service">Professional Service</h2>

**Program Committee / Reviewer:** ACL 2026, ACL 2026 Industry Track, ICML 2026, NeurIPS 2026.
</section>
