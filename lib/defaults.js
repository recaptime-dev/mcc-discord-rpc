let defaultActivity = {
    details: "Event starts soon",
    assets: {
        large_image: "mcc-twitter",
        large_text: "MC Championship",
        small_image: "spectator",
        small_text: "Probably watching on Admin Stream soon"
    },
    buttons: [
        {
            "label": "Check event stats",
            "url": "https://mcc.live"
        },
        {
            "label": "View source",
            "url": "https://gitlab.com/RecapTime/mcc-discord-rpc"
        }
    ],
    timestamps: {
        // set start time to when it's started
        start: Date.now(),
        // TODO: Update the end time, assuming that @TubboLive leaks it again.
        end: 1651032000000 // MCC20 in UTC time
    }
}

module.exports = {
    defaultActivity
}
