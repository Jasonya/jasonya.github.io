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

<header class="profile-intro" id="about-me">
<div class="profile-bio" markdown="1">

# Wei-Chieh Huang

I am a Ph.D. student in Computer Science at the [University of Illinois Chicago](https://www.uic.edu/), advised by Professor [Philip S. Yu](https://scholar.google.com/citations?user=D0lL1r0AAAAJ) in the [BDSC lab](https://bdsc-uic.github.io/). Expected graduation: May 2028.

My research focuses on **agent memory**, **interactive evaluation**, **deep research**, and **human–agent collaboration**. I am currently an Applied Scientist Intern at **Amazon Quick**, building multi-agent software generation systems for sandbox environment creation.

<nav class="profile-links" aria-label="Academic and professional profiles">
  <a href="{{ site.author.googlescholar }}" aria-label="Google Scholar" title="Google Scholar"><i class="ai ai-google-scholar-square" aria-hidden="true"></i></a>
  <a href="{{ site.author.dblp }}" aria-label="DBLP" title="DBLP"><i class="ai ai-dblp" aria-hidden="true"></i></a>
  <a class="profile-github" href="https://github.com/{{ site.author.github }}" aria-label="GitHub" title="GitHub"><span class="brand-icon" aria-hidden="true">&#xf09b;</span></a>
  <a class="profile-linkedin" href="https://www.linkedin.com/in/{{ site.author.linkedin }}/" aria-label="LinkedIn" title="LinkedIn"><span class="brand-icon" aria-hidden="true">&#xf08c;</span></a>
  <a class="profile-orcid" href="{{ site.author.orcid }}" aria-label="ORCID" title="ORCID"><i class="ai ai-orcid" aria-hidden="true"></i></a>
  <a class="profile-cv" href="{{ '/files/Wei-Chieh-Huang-CV.pdf' | relative_url }}" aria-label="Download CV (PDF)" title="Download CV (PDF)">CV</a>
</nav>
<p class="profile-email">Email: <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a><span aria-hidden="true"> · </span>Chicago, IL</p>
<p class="internship-note">I am looking for <strong>Research Internship</strong> opportunities in <strong>Summer 2027</strong>. Feel free to reach out!</p>

</div>
<figure class="profile-portrait">
  <img src="{{ '/images/jason.jpeg' | relative_url }}" alt="Wei-Chieh Huang" width="220" height="293" fetchpriority="high">
  <figcaption>University of Illinois Chicago</figcaption>
</figure>
</header>

<h2 id="-news">News</h2>

<div class="news-list" markdown="1">

- <span class="news-date">2026 Sep</span><span class="news-body">Joined **Amazon Quick** as an **Applied Scientist Intern**.</span>
- <span class="news-date">2026 Sep</span><span class="news-body">**Harness the Memory** and **JARVIS-Bench** accepted to **NeurIPS 2026 (ED Track)**; **XBridge** accepted to **NeurIPS 2026**.</span>
- <span class="news-date">2026 Aug</span><span class="news-body">Our **Agent Memory Survey** accepted to **TMLR 2026**, with **Survey Certification**.</span>

</div>

<details class="earlier-news" markdown="1">
<summary>Earlier news</summary>

<div class="news-list" markdown="1">

- <span class="news-date">2026 May</span><span class="news-body">"LLM-Based Human-Agent Collaboration and Interaction Systems: A Survey" accepted to ACL 2026 Findings.</span>
- <span class="news-date">2026 Apr</span><span class="news-body">"Deep Research with Open-Domain Evaluation and Multi-Stage Guardrails for Safety" accepted to ACL 2026 Main.</span>
- <span class="news-date">2026 Jan</span><span class="news-body">"MADIAVE: Multi-Agent Debate for Implicit Attribute Value Extraction" accepted to EACL 2026 Findings.</span>
- <span class="news-date">2026 Jan</span><span class="news-body">"RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback" accepted to ICLR 2026.</span>
- <span class="news-date">2026 Jan</span><span class="news-body">Reviewing for ICML 2026, ACL 2026, and ACL 2026 Industry Track.</span>

</div>
</details>


<h2 id="-selected-publications">Selected Papers <a class="section-link" href="#-full-publication-list">full publication list</a></h2>

<p class="section-note">* Equal contribution.</p>

{% include selected-publications.html %}

<h2 id="-research-interests">Research Interests</h2>

- **Agentic Memory & Lifelong Personalization**: Memory and retrieval for long-horizon agents, self-evolving skills, and lifelong personalization.
  <span class="research-papers">Related work: [Harness the Memory](#pub-huang2026harnessmemory), [Memory Survey](#pub-huang2025rethink), [MemoryCD](#pub-wz2026memory), [MemAudit](#pub-ma2026memprobe), [HyperSkill](#pub-xu2026hyperskill)</span>
- **Agent Evaluation & Interactive Benchmarking**: Benchmarks for long-horizon tasks, human participation, interruption, and mid-task steering.
  <span class="research-papers">Related work: [JARVIS-Bench](#pub-zhang2026jarvisbench), [HAS-Bench](#pub-wu2026hasbench), [InterruptBench](#pub-zou2026whenusers), [RECODE-H](#pub-miao2025recode)</span>
- **Agentic Deep Research, Tool Use & RL**: Search and reasoning agents, agentic RAG, reinforcement learning, and multi-stage safety guardrails.
  <span class="research-papers">Related work: [DeepResearchGuard](#pub-huang2025deepresearchguard), [Deep Research Survey](#pub-zhang2025deep), [RAG Survey](#pub-li2025towards), [CoEvoSkills](#pub-zhang2026evoskills), [Data Synthesis Survey](#pub-zhang2026datasynth), [Action Bottleneck](#pub-he2026action)</span>
- **Human–Agent Collaboration & Trustworthy Systems**: Human feedback, multi-agent debate and coordination, and trustworthy, personality-aware interaction.
  <span class="research-papers">Related work: [MADIAVE](#pub-huang2025madiave), [Human–Agent Survey](#pub-zoullm), [Autonomous Driving Survey](#pub-wu2025multi), [Collaborative Intelligence](#pub-zou2025call), [PSG-Agent](#pub-wu2025psg), [RECODE-H](#pub-miao2025recode), [XBridge](#pub-yang2026xbridge)</span>

<h2 id="-full-publication-list">All Publications</h2>

See also my [Google Scholar](https://scholar.google.com.tw/citations?user=OQY7yd8AAAAJ&hl=en) profile. **\* Equal contribution.**

<div class="pub-list">

<h3 class="pub-year">2026</h3>

<div class="pub-item" id="pub-huang2026harnessmemory">
  <a class="pub-title" href="https://arxiv.org/abs/2608.15008">Harness the Memory: A Holistic Evaluation of Memory Substrates in Memory Agents</a>
  <div class="pub-authors"><b>Wei-Chieh Huang</b>, Weizhi Zhang, Yuchen Wu, Yankai Chen, …, Philip S. Yu, Xue Liu, Aylin Caliskan</div>
  <div class="pub-meta"><span class="pub-tag">NeurIPS 2026 (ED Track)</span></div>
</div>

<div class="pub-item" id="pub-huang2025rethink">
  <a class="pub-title" href="https://openreview.net/forum?id=XycbogUAeJ">A Survey of Agent Memory in the Second Half: Towards Self-Evolving and Long-Horizon Agents</a>
  <div class="pub-authors"><b>Wei-Chieh Huang</b><sup>&#42;</sup>, Weizhi Zhang<sup>&#42;</sup>, Yueqing Liang<sup>&#42;</sup>, Yuanchen Bei, Yankai Chen, Tao Feng, Xinyu Pan, Zhen Tan, Yu Wang, Tianxin Wei, Shanglin Wu, Ruiyao Xu, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">TMLR 2026</span><span class="pub-tag pub-tag--award">Survey Certification</span></div>
</div>

<div class="pub-item" id="pub-huang2025deepresearchguard">
  <a class="pub-title" href="https://aclanthology.org/2026.acl-long.2010/">Deep Research with Open-Domain Evaluation and Multi-Stage Guardrails for Safety</a>
  <div class="pub-authors"><b>Wei-Chieh Huang</b>, Henry Peng Zou, Yaozu Wu, Dongyuan Li, Yankai Chen, Weizhi Zhang, Yangning Li, Angelo Zangari, Jizhou Guo, Chunyu Miao, Liancheng Fang, Langzhou He, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">ACL 2026 Main (Poster)</span></div>
</div>

<div class="pub-item" id="pub-huang2025madiave">
  <a class="pub-title" href="https://aclanthology.org/2026.findings-eacl.159/">MADIAVE: Multi-Agent Debate for Implicit Attribute Value Extraction</a>
  <div class="pub-authors"><b>Wei-Chieh Huang</b>, Cornelia Caragea</div>
  <div class="pub-meta"><span class="pub-tag">EACL 2026 Findings</span></div>
</div>

<div class="pub-item" id="pub-zhang2026jarvisbench">
  <a class="pub-title" href="https://openreview.net/forum?id=yGQt9wAGkS">JARVIS-Bench: Benchmarking Personal Intelligence Agents on Long-Horizon Real-User Daily Traces</a>
  <div class="pub-authors">Weizhi Zhang<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Yueqing Liang<sup>&#42;</sup>, Liwei Jiang, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">NeurIPS 2026 (ED Track)</span></div>
</div>

<div class="pub-item" id="pub-zhang2025deep">
  <a class="pub-title" href="https://www.arxiv.org/abs/2506.18959">From Web Search towards Agentic Deep Research: Incentivizing Search with Reasoning Agents</a>
  <div class="pub-authors">Weizhi Zhang<sup>&#42;</sup>, Yangning Li<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Yuanchen Bei, Junyu Luo, Guancheng Wan, Liangwei Yang, Chenxuan Xie, Yuyao Yang, Chunyu Miao, Henry Peng Zou, Xiao Luo, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">Under Review, 2026</span></div>
</div>

<div class="pub-item" id="pub-yeh2026amos">
  <a class="pub-title" href="https://doi.org/10.1145/3770855.3817839">AMOS: Active Mining with Observable Steps for Agenda-Driven Review Knowledge Discovery</a>
  <div class="pub-authors">Chin-Yuan Yeh, <b>Wei-Chieh Huang</b>, Hsi-Wen Chen, Chen Wang, De-Nian Yang, …, Philip S. Yu, Ming-Syan Chen</div>
  <div class="pub-meta"><span class="pub-tag">KDD 2026</span></div>
</div>

<div class="pub-item" id="pub-zoullm">
  <a class="pub-title" href="https://aclanthology.org/2026.findings-acl.1811/">LLM-Based Human-Agent Collaboration and Interaction Systems: A Survey</a>
  <div class="pub-authors">Henry Peng Zou<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Yaozu Wu<sup>&#42;</sup>, Jizhou Guo, Yankai Chen, Chunyu Miao, Hoang Nguyen, Yue Zhou, Weizhi Zhang, Liancheng Fang, Hanrong Zhang, Fangxin Wang, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">ACL 2026 Findings</span></div>
</div>

<div class="pub-item" id="pub-wu2026hasbench">
  <a class="pub-title" href="https://arxiv.org/abs/2607.04329">HAS-Bench: Evaluating LLM-Based Human-Agent Systems under Configurable Human Participation</a>
  <div class="pub-authors">Yaozu Wu<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Jizhou Guo<sup>&#42;</sup>, Dongyuan Li, Renhe Jiang, Henry Peng Zou, Chunyu Miao, Shanghao Li, Weizhi Zhang, WeiWei Ye, Yankai Chen, Meng Zhang, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2607.04329, 2026</span></div>
</div>

<div class="pub-item" id="pub-zou2026whenusers">
  <a class="pub-title" href="https://arxiv.org/abs/2604.00892">When Users Change Their Mind: Evaluating Interruptible Agents in Long-Horizon Web Navigation</a>
  <div class="pub-authors">Henry Peng Zou<sup>&#42;</sup>, Chunyu Miao<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Yankai Chen, Yue Zhou, Hanrong Zhang, Yaozu Wu, Liancheng Fang, Zhengyao Gu, Zhen Zhang, Kening Zheng, Fangxin Wang, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2604.00892, 2026</span></div>
</div>

<div class="pub-item" id="pub-zou2025call">
  <a class="pub-title" href="https://arxiv.org/abs/2506.09420">A Call for Collaborative Intelligence: Why Human-Agent Systems Should Precede AI Autonomy</a>
  <div class="pub-authors">Henry Peng Zou<sup>&#42;</sup>, <b>Wei-Chieh Huang</b><sup>&#42;</sup>, Yaozu Wu<sup>&#42;</sup>, Chunyu Miao, Dongyuan Li, Aiwei Liu, Yue Zhou, Yankai Chen, Weizhi Zhang, Yangning Li, Liancheng Fang, Renhe Jiang, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">Under Review, 2026</span></div>
</div>

<div class="pub-item" id="pub-wu2025psg">
  <a class="pub-title" href="https://arxiv.org/abs/2509.23614">PSG-Agent: Personality-Aware Safety Guardrail for LLM-Based Agents</a>
  <div class="pub-authors">Yaozu Wu, Jizhou Guo, Dongyuan Li, Henry Peng Zou, <b>Wei-Chieh Huang</b>, Yankai Chen, Zhen Wang, Weizhi Zhang, Yangning Li, Meng Zhang, Renhe Jiang, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">Under Review, 2026</span></div>
</div>

<div class="pub-item" id="pub-wz2026memory">
  <a class="pub-title" href="https://openreview.net/forum?id=Lpq4aEqvmg">MemoryCD: Benchmarking Long-Context User Memory of LLM Agents for Lifelong Cross-Domain Personalization</a>
  <div class="pub-authors">Weizhi Zhang, Xiaokai Wei, <b>Wei-Chieh Huang</b>, Zheng Hui, Chen Wang, Michelle Gong, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--workshop">ICLR 2026 Lifelong Agent Workshop</span></div>
</div>

<div class="pub-item" id="pub-ma2026memprobe">
  <a class="pub-title" href="https://arxiv.org/abs/2606.24595">MemAudit: Auditing Long-Term Agent Memory via Hidden User-State Recovery</a>
  <div class="pub-authors">Enze Ma, Yufan Zhou, <b>Wei-Chieh Huang</b>, Jie Yang, Huanhuan Ma, Zixuan Wang, Chengze Li, Chunyu Miao, Philip S. Yu, Zhen Wang</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2606.24595, 2026</span></div>
</div>

<div class="pub-item" id="pub-xu2026hyperskill">
  <a class="pub-title" href="https://arxiv.org/abs/2608.16114">HyperSkill: Self-Evolving LLM Agents via Hypergraph-Structured Skill Memory</a>
  <div class="pub-authors">Ruiyao Xu, Tiankai Yang, <b>Wei-Chieh Huang</b></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2608.16114, 2026</span></div>
</div>

<div class="pub-item" id="pub-miao2025recode">
  <a class="pub-title" href="https://openreview.net/forum?id=IKnuyyPHCV">RECODE-H: A Benchmark for Research Code Development with Interactive Human Feedback</a>
  <div class="pub-authors">Chunyu Miao, Henry Peng Zou, Yangning Li, Yankai Chen, Yibo Wang, Fangxin Wang, Yifan Li, Wooseong Yang, Bowei He, Xinni Zhang, Dianzhi Yu, Hanchen Yang, Hoang H Nguyen, Yue Zhou, Jie Yang, Jizhou Guo, Wenzhe Fan, Chin-Yuan Yeh, Panpan Meng, Liancheng Fang, Jinhu Qi, <b>Wei-Chieh Huang</b>, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">ICLR 2026</span></div>
</div>

<div class="pub-item" id="pub-zhang2026evoskills">
  <a class="pub-title" href="https://arxiv.org/abs/2604.01687">CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Verification</a>
  <div class="pub-authors">Hanrong Zhang, Shicheng Fan, Henry Peng Zou, Yankai Chen, Zhenting Wang, Jiayu Zhou, Chengze Li, <b>Wei-Chieh Huang</b>, Yifei Yao, Kening Zheng, Xue Liu, Xiaoxiao Li, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">COLM 2026</span></div>
</div>

<div class="pub-item" id="pub-zhang2026datasynth">
  <a class="pub-title" href="https://openreview.net/forum?id=pQYwkpYmLy">Scaling LLM Agent Learning with Data Synthesis: A Comprehensive Survey</a>
  <div class="pub-authors">Hanrong Zhang, Yankai Chen, Shicheng Fan, Dehai Min, Shaowen Chen, Huanhuan Ma, Zhaofen Wu, Jie Yang, Bowei He, Jikun Kang, Kening Zheng, Xi Chen, Chunyu Miao, Fulin Lin, <b>Wei-Chieh Huang</b>, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">Under Review, 2026</span></div>
</div>

<div class="pub-item" id="pub-yang2026xbridge">
  <a class="pub-title" href="https://arxiv.org/abs/2608.11676">XBridge: Entity-Grounded Latent Bridge for Heterogeneous LLM Communication</a>
  <div class="pub-authors">Wooseong Yang, <b>Wei-Chieh Huang</b>, Weizhi Zhang, Yu Wang, Philip S. Yu, Junhyun Lee</div>
  <div class="pub-meta"><span class="pub-tag">NeurIPS 2026</span></div>
</div>

<div class="pub-item" id="pub-zheng2026moe">
  <a class="pub-title" href="https://arxiv.org/abs/2604.03592">Unveiling Language Routing Isolation in Multilingual MoE Models for Interpretable Subnetwork Adaptation</a>
  <div class="pub-authors">Kening Zheng, <b>Wei-Chieh Huang</b>, Jiahao Huo, Zhonghao Li, Henry Peng Zou, Yibo Yan, Xin Zou, Jungang Li, Junzhuo Li, Hanrong Zhang, Xuming Hu, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag">EMNLP 2026 Findings</span></div>
</div>

<div class="pub-item" id="pub-he2026action">
  <a class="pub-title" href="https://arxiv.org/abs/2605.14558">Resolving Action Bottleneck: Agentic Reinforcement Learning Informed by Token-Level Energy</a>
  <div class="pub-authors">Langzhou He, Junyou Zhu, Yue Zhou, Zhengyao Gu, Junhua Liu, <b>Wei-Chieh Huang</b>, Henry Peng Zou, David Wipf, Philip S. Yu, Qitian Wu</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2605.14558, 2026</span></div>
</div>

<div class="pub-item" id="pub-fang2026diffusion">
  <a class="pub-title" href="https://arxiv.org/abs/2604.00375">Locally Confident, Globally Stuck: The Quality-Exploration Dilemma in Diffusion Language Models</a>
  <div class="pub-authors">Liancheng Fang, Aiwei Liu, Henry Peng Zou, Yankai Chen, Enze Ma, Leyi Pan, Chunyu Miao, <b>Wei-Chieh Huang</b>, Xue Liu, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag">COLM 2026</span></div>
</div>

<div class="pub-item" id="pub-huo2026causalembed">
  <a class="pub-title" href="https://arxiv.org/abs/2601.21262">CausalEmbed: Auto-Regressive Multi-Vector Generation in Latent Space for Visual Document Embedding</a>
  <div class="pub-authors">Jiahao Huo, Yu Huang, Yibo Yan, Ye Pan, Kening Zheng, <b>Wei-Chieh Huang</b>, Yi Cao, Mingdong Ou, Philip S. Yu, Xuming Hu</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">Under Review, 2026</span></div>
</div>

<div class="pub-item" id="pub-li2026arcstar">
  <a class="pub-title" href="https://arxiv.org/abs/2605.22222">ARC-STAR: Auditable Post-Hoc Correction for PDE Foundation Models</a>
  <div class="pub-authors">Chengze Li, Lingwei Wei, Li Sun, Hongbo Lv, Jie Yang, Hanrong Zhang, Kening Zheng, <b>Wei-Chieh Huang</b>, Enze Ma, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag pub-tag--preprint">arXiv:2605.22222, 2026</span></div>
</div>

<h3 class="pub-year">2025</h3>

<div class="pub-item" id="pub-li2025towards">
  <a class="pub-title" href="https://aclanthology.org/2025.findings-emnlp.648/">Towards Agentic RAG with Deep Reasoning: A Survey of RAG-Reasoning Systems in LLMs</a>
  <div class="pub-authors">Yangning Li<sup>&#42;</sup>, Weizhi Zhang<sup>&#42;</sup>, Yuyao Yang, <b>Wei-Chieh Huang</b>, Yaozu Wu, Junyu Luo, Yuanchen Bei, Henry Peng Zou, Xiao Luo, Yusheng Zhao, Chunkit Chan, Yankai Chen, <i>et al.</i></div>
  <div class="pub-meta"><span class="pub-tag">EMNLP 2025</span></div>
</div>

<div class="pub-item" id="pub-wu2025multi">
  <a class="pub-title" href="https://aclanthology.org/2025.findings-emnlp.683/">Multi-Agent Autonomous Driving Systems with Large Language Models: A Survey of Recent Advances, Resources, and Future Directions</a>
  <div class="pub-authors">Yaozu Wu<sup>&#42;</sup>, Dongyuan Li<sup>&#42;</sup>, Yankai Chen, Renhe Jiang, Henry Peng Zou, <b>Wei-Chieh Huang</b>, Yangning Li, Liancheng Fang, Zhen Wang, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag">EMNLP 2025</span></div>
</div>

<div class="pub-item" id="pub-li2025teaching">
  <a class="pub-title" href="https://aclanthology.org/2025.findings-emnlp.629/">Teaching According to Talents! Instruction Tuning LLMs with Competence-Aware Curriculum Learning</a>
  <div class="pub-authors">Yangning Li, Tingwei Lu, Yinghui Li, Yankai Chen, <b>Wei-Chieh Huang</b>, Wenhao Jiang, Hui Wang, Hai-Tao Zheng, Philip S. Yu</div>
  <div class="pub-meta"><span class="pub-tag">EMNLP 2025 Findings</span></div>
</div>

<h3 class="pub-year">2023</h3>

<div class="pub-item" id="pub-battery">
  <a class="pub-title" href="https://www.sciencedirect.com/science/article/pii/S2666792423000057">Impacts of Battery Energy Storage Technologies and Renewable Integration on the Energy Transition in the New York State</a>
  <div class="pub-authors"><b>Wei-Chieh Huang</b>, Qianzhi Zhang, Fengqi You</div>
  <div class="pub-meta"><span class="pub-tag">Advances in Applied Energy</span></div>
</div>

</div>

<h2 id="-educations">Education</h2>
- *2024.08–Present*, Ph.D. in Computer Science, University of Illinois Chicago (UIC), US. Expected graduation: **May 2028**.
- *2020.09 - 2022.12*, M.S. in Systems Engineering, Cornell University, US.
- *2013.09 - 2017.06*, B.S. in Chemical Engineering, National Taiwan University of Science and Technology (NTUST), Taiwan.

<h2 id="-work-experience">Work Experience</h2>
- **Amazon — Amazon Quick** — Applied Scientist Intern, Seattle, WA. *Sep. 2026–Present*
  - Build an end-to-end multi-agent software generation system for Amazon Quick, integrating task planning, code synthesis, tool orchestration, and execution to automate sandbox environment creation.
  - Optimize tool selection and invocation, agent memory and retrieval, multi-agent communication topology, execution harnesses, and loop engineering through self-improving workflows and recursive self-improvement (RSI).
- **GEICO — Research & Innovation** — Data Scientist, Chevy Chase, MD. *Jan. 2022–Dec. 2023*
  - Built an automatic multimodal document-verification pipeline that fuses textual information and visual patterns via a BERT and CNN fusion model, achieving 98% overall accuracy for insurance customer verification.
  - Designed and deployed an underwriting ML pipeline to detect potential insurance fraud, reducing the overall loss ratio by 3.5% and generating projected annual savings of $60M.

<h2 id="-service">Professional Service</h2>

**Program Committee / Reviewer:** ACL 2026, ACL 2026 Industry Track, ICML 2026, NeurIPS 2026.
