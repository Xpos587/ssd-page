module.exports = (username, discriminator, avatar, id) => {
    console.log(username)
    console.log(discriminator)
    console.log(`https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=2048`)

    const usernameElm = document.getElementById('userDiscriminator')
    usernameElm.innerText = `${username}#${discriminator}`
}