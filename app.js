const express = require("express")
const app = new express()
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
const { defaultActivity } = require("./lib/defaults");
const { teamsIndex } = require("./lib/teams")
const port = process.env.PORT || 60881

app.get("/changeTeams/:teamSlug", (res, req) => {
    if (req.teamSlug == "sprecators") {
        client.setActivity({
            pid: process.pid,
            activity: teamsIndex.regularEvents.sprecators
        })
    } else {
        res.status(404).json({
            ok: false,
            error: "Team not found on index."
        })
    }
})


client.on('ready', async () => {
    client.request("SET_ACTIVITY", { pid: process.pid, activity: defaultActivity });
    console.log("info: Successfully set default activity for upcoming stream. Check docs on how to change them via API.");
});
client.on('connected', async () => {
    console.log("info: Connected to Discord RPC");
});
app.listen(port, () => {
    console.log("info: REST API is up at http://localhost:"+port+", see the docs for details on how to use it.")
})


// Uses the unofficial MCC.Live OAuth client ID from Andrei Jiroh.
client.login({ clientId: "952456760948559932" });
