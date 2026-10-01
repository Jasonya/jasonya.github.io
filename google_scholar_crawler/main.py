from scholarly import scholarly
import json
from datetime import datetime, timezone
import os

author: dict = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
name = author['name']
author['updated'] = datetime.now(timezone.utc).isoformat()
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
assert isinstance(author.get('citedby'), int) and author['citedby'] >= 0, 'Invalid citation count'
print(f"Fetched {author['citedby']} citations for {name}; {len(author['publications'])} publications.")
os.makedirs('results', exist_ok=True)
with open(f'results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
