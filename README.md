# GuggyRocketChat

## Overview 
GuggyRocketChat is a slash-command for <a href='https://rocket.chat'>Rocket.Chat</a> which sends your given phrase to <a href='http://guggy.com/'>Guggy</a> and shows a GIF with your message.


## Installation

### Configure Rocket.Chat
Add an "Outgoing Webhook" to your Rocket-Chat Instance (see <a href="https://rocket.chat/docs/administrator-guides/integrations/">Rocket.Chat Documentation</a>)

On the webhook config screen, set the following values:

##### Trigger Words
Set the trigger words on which the command should be fired e.g. `/guggy`.

##### URLs
In this field you must enter `http://text2gif.guggy.com/guggify`

##### Token
Add your Guggy API Key here

##### Script Enabled
This value mus be true

##### Script
Now insert the complete code of the file `GuggyIntegration.js` into this field.

#### Save changes
Click on "SAVE CHANGES" and you're done.
