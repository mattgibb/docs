---
sidebar_position: 20
title: Create API Key
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
<TabItem value="js" label="Javascript">

```js
try{
await client.createApiKey(keyid);
}
catch(e){
console.log('API Creation Failed: ', e);
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
from c8 import C8Client
  
API_ACTIVE = False
CHOSEN_API_KEY_ID = "myNewKey"
EMAIL = 'nemo@nautilus.com'
PASSWORD = 'xxxxx'
URL = "gdn.paas.macrometa.io"

client = C8Client(protocol='https', host=URL, port=443, email=EMAIL, password=PASSWORD)


# Get a list of all the API key ID's names
apiKeyIds = []
for api in client.list_all_api_keys():
    apiKeyIds.append(api["keyid"])

# Checks if `chosen_api_key` exists
for apiElement in apiKeyIds:
    if apiElement == CHOSEN_API_KEY_ID:
        API_ACTIVE = True
        break

# Checks if the API key exists
if API_ACTIVE:
    # Display a message that the key already exists
    print("Can't create an already existing key")
else:
    # Create a new API key
    try:
        print("Create API Key: ", client.create_api_key(CHOSEN_API_KEY_ID))
    except Exception as err:
        print("Error generating the API key")
        print(err)
```

</TabItem>
<TabItem value="RA" label="Rest API">

```js
# Create an API Key
FEDERATION = "api-gdn.macrometa.io"
FED_URL = "https://{}".format(FEDERATION)
keyid = "id1"
url = FED_URL + "/_api/key"
payload= {
"keyid": keyid
}

resp = session.post(url, data = json.dumps(payload))
resp = json.loads(resp.text)
if resp['error'] is True:
print("ERROR: " , resp)
else:
print("API Key Created: ", resp)
```

</TabItem>
</Tabs>
