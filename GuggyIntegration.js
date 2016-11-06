const config = {
    color: '#ffffff'
};

class Script {
    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word + ' ';
        const phrase = request.data.text.replace(trigger, '');
        request.headers['Content-Type']='application/json';
        request.headers['apiKey']=request.data.token;
        return {
            url: request.url,
            headers: request.headers,
            data: {format: 'gif', sentence: phrase},
            method: 'POST'
        };
    }

    process_outgoing_response({ request, response }) {
        if(response.content.gif) {
            return {
                content: {
                    attachments: [
                        {
                            image_url: response.content.gif,
                            color: ((config['color'] != '') ? '#' + config['color'].replace('#', '') : '#ffffff')
                        }
                    ]
                }
            };
        } else {
            return {
                content: {
                    text: 'Sorry I don\'t have a photo for you :disappointed_relieved:'
                }
            };
        }
    }
}
