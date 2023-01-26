const { CommandBuilder } = require("advanced-cmd")

const comando = new CommandBuilder()
comando.setName("ping")
comando.setDescription("Ve mi ping")
comando.setExecute(
    function (client, interaction){
        interaction.reply(`Mi ping es de **${client.ws.ping}**`)
    }
)

module.exports = comando