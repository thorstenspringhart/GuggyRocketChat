const config = {
    title: 'Guggy', // This allows the attachments to be collapsed
    color: '#ffffff', // Empty this for a random color based on the phrase
    collapsed: false // Change to true to have the images collapsed by default (only if title is entered)
};

class Script {
    // Modified from Source: http://stackoverflow.com/a/16348977/6997092
    getColor({ text }) {
        if (config['color']) {
            return '#' + config['color'].replace('#', '');
        } else if (!text) {
            return '#ffffff';
        }

        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }

        return color;
    }

    prepare_outgoing_request({ request }) {
        const trigger = request.data.trigger_word + ' ';
        const phrase = request.data.text.replace(trigger, '');

        request.headers['Content-Type'] = 'application/json';
        request.headers['apiKey'] = request.data.token;

        return {
            url: request.url,
            headers: request.headers,
            data: { format: 'gif', sentence: phrase },
            method: 'POST'
        };
    }

    process_outgoing_response({ request, response }) {
        if(response.content.gif) {
            return {
                content: {
                    attachments: [
                        {
                            title: config['title'],
                            image_url: response.content.gif,
                            color: this.getColor({ text: request.data.sentence }),
                            collapsed: config['collapsed'] === true // This is set to ensure the collapsed value is a boolean
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
