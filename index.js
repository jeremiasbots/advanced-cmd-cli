#!/usr/bin/env node
const { program } = require("commander")
const fs = require("fs-extra")
const path = require("path")
const { exec } = require("child_process")

program.argument('<nameCarpet>').action(async function(args){
    await fs.mkdirSync(path.join(process.cwd(), args))

    await fs.copySync(path.join(__dirname, "Bot"), path.join(process.cwd(), args))

    exec(`"${path.join(__dirname, "bash.sh")}" ${path.join(process.cwd(), args)}`, (error) => {
        if(error) console.log(error)
    })
})

program.parse(process.argv)