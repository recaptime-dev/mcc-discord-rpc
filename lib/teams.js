let teamsIndex = {
    regularEvents: {
        sprecators: {
            description: "Watching Admin Stream",
            assets: {
                large_image: "mcc-twitter",
                large_text: "MC Championship"
            },
            buttons: [
                {
                    "label": "Check event stats / Where To Watch",
                    "url": "https://mcc.live"
                },
                {
                    "label": "View source",
                    "url": "https://gitlab.com/RecapTime/mcc-discord-rpc"
                }
            ],
            timestamp: {
                start: Date.now()
            }
        }
    },
    specialEvents: {}
}

module.exports = teamsIndex