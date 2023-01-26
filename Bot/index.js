const Discord = require("discord.js")
const client = new Discord.Client({ intents: 3276799 })
require("dotenv").config()
client.login(process.env.TOKEN)
const { config, reload } = require("advanced-cmd")

config(client, "Commands", __dirname, process.env.PREFIX)

client.on("ready", () => {
    reload(client)
})