# GuggyRocketChat

## Overview 
GuggyRocketChat is a slash-command for <a href='https://rocket.chat'>Rocket.Chat</a> which sends your given phrases to <a href='http://guggy.com/'>Guggy.com</a> and shows a matching gif
<br /><br /><br /><br />


## Installation

### Configure Rocket.Chat
Add an "Outgoing Webhook" to your Rocket-Chat Instance (see <a href="https://rocket.chat/docs/administrator-guides/integrations/">Rocket.Chat Documentation</a>)

On the webhook config screen, set the following values:
<br /><br />

##### Trigger Words
Set the trigger words on which the command should be fired e.g. `/guggy`.
<br /><br />

##### URLs
In this field you must enter `http://text2gif.guggy.com/guggify`
<br /><br />

##### Token
Add your Guggy API Key here

##### Script Enabled
This value mus be true
<br /><br />

##### Script
Now insert the complete code of the file `GuggyRocket.js` into this field.
<br /><br />

#### Save changes
Click on "SAVE CHANGES" and you're done.
<br /><br /><br /><br />
