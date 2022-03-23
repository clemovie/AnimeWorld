const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const   Canvas = require("canvas");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "!";

//console "on"
Client.on("ready", () => {
    console.log("|------ Bot on ------|");
});





//statue
Client.on("ready", async () => {
    Client.user.setStatus("online")
    Client.user.setActivity("DEV", {type: "WATCHING"});
})






//arrivée
Client.on("guildMemberAdd", async member => {
    console.log("un membre est arrivée");
    member.roles.add("926830792288632893");
    const awnser = ["a bondi", "viens d'arrivé", "arrive sur le meilleur serveur!"];
    Client.channels.cache.get("926629734425698354").send("<" + member.id + ">" + awnser[Math.floor(Math.random() * (awnser.length - 1))]);
    var canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./Image/back.png");
    ctx.drawImage(background, 0, 0, 1024, 500);

    ctx.font = "52px Tokyo Night";
    ctx.fillstyle = "#1b2b69";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase() + " ", 512, 410);

    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png",
        size: 1024
    }));

    ctx.drawImage(avatar, 393, 47, 238, 238);

    var attachments = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    Client.channels.cache.get("926629734425698354").send({files: [attachments]});
})
//départ
Client.on("guildMemberRemove", member => {
    console.log("un memebre est parti")
})


















//commande
Client.on("messageCreate", message => {
    if(message.author.bot)return;

    //!ping
    if(message.content === prefix + "ping"){
        var ping = Client.ws.ping
        const embed = new Discord.MessageEmbed()
        .setColor("#1b2b69")
        .setDescription("mon ping est de " + ping + "ms !")
        .setImage("https://c.tenor.com/zHi1yy-QyTUAAAAd/anime-train.gif")
        .setTimestamp();

        message.channel.send({ embeds: [embed]});


    };

        //!kiss
        if(message.content.startsWith(prefix + "kiss")){
            let mention = message.mentions.members.first();
            
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " a embrasser " + mention.displayName)
                .setImage("https://cutewallpaper.org/21/kiss-anime-pictures/Anime-kiss-GIFs-Get-the-best-GIF-on-GIPHY.gif")
                .setTimestamp();
            
                message.channel.send({ embeds: [embed]});
            }
        };
    
        //!slap
        if(message.content.startsWith(prefix + "slap")){
            let mention = message.mentions.members.first();
            
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " a baffer " + mention.displayName)
                .setImage("https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif")
                .setTimestamp();
    
                message.channel.send({ embeds: [embed]});
            }
        };
    
        //!hug
        if(message.content.startsWith(prefix + "hug")){
           let mention = message.mentions.members.first();
            
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " fait un calin a " + mention.displayName)
                .setImage("https://acegif.com/wp-content/gif/anime-hug-38.gif")
                .setTimestamp();
    
                message.channel.send({ embeds: [embed]});
            }
        };
    
        //!tickle
        if(message.content.startsWith(prefix + "tickle")){
            let mention = message.mentions.members.first();
    
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " fait des chatouille a " + mention.displayName)
                .setImage("https://thumbs.gfycat.com/BlandMassiveCranefly-size_restricted.gif")
                .setTimestamp();
    
            message.channel.send({ embeds: [embed]});
            }
        };
    
        //!poke
        if(message.content.startsWith(prefix + "poke")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " touche " + mention.displayName)
                .setImage("https://cdn.nekos.life/poke/poke_005.gif")
                .setTimestamp("https://c.tenor.com/nRKOOicoT8YAAAAC/anime-poke.gif");
    
                message.channel.send({ embeds: [embed]});
            }
        };
    
    
    
        //!cheh
        if(message.content.startsWith(prefix + "cheh")){
            let mention = message.mentions.members.first();
    
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(mention.displayName +" a été karma")
                .setImage("https://i.imgur.com/yINGgF7.gif")
                .setTimestamp();
    
                message.channel.send({ embeds: [embed]});
            }
        };



        //!wendding
        if(message.content.startsWith(prefix + "wendding")){
            let mention = message.mentions.members.first();
            
            if(mention == undefined){
                message.reply("membre non ou mal mentionner");
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle(message.author.username + " c'est marrié avec " + mention.displayName)
                .setImage("https://pa1.narvii.com/6075/38b36eb01b56a4728793b9bf183c962d2084249f_hq.gif")
                .setTimestamp();
            
                message.channel.send({ embeds: [embed]});
            }
        };



        //!8ball
        if(message.content.startsWith(prefix + "8ball")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("il n'y a pas de question")
            }
            else{
                const awnser = ["Oui", "Hummm je ne sais pas...", "Non!"];
         
                message.reply(awnser[Math.floor(Math.random() * (awnser.length - 1))]);
            }
        };




        //!chifoumi
        if(message.content.startsWith(prefix + "chifoumi")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("vous n'avez pas fait de signe Pierre,feuille ou ciseaux")
            }
            else{
                const awnser = ["Pierre", "Feuille", "Ciseaux"];
         
                message.reply(awnser[Math.floor(Math.random() * (awnser.length - 1))]);
            };
        };


        //quoi
        if(message.content.endsWith("quoi")){
            message.reply("feur :blond_haired_person:  :scissors: :barber: ");
        };
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //administration
    if(message.member.permissions.has("ADMINISTRATOR")){
        //!rules
        if(message.content === prefix + "rules"){
            const embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/926810848205352991/927192215099412510/pyo.gif")
            message.channel.send({embeds: [embed]})

            embed
            .setColor("#1b2b69")
            .setTitle("Règlement")
            .setDescription("voici les règles du serveur")
            .setImage("https://media2.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif")
            .addField("__Comportement__", "-Restez courtois, poli. Vous pouvez être familier, nous ne vous demandons pas d’écrire comme Molière, nous ne sommes pas à L’Élysée \n  -Pas de violence verbale gratuite. Vous pouvez taquiner gentiment sans aller dans l’extrême. Si cela reste dans la bonne humeur et le second degré nous le tolérons. Si le staff ou moi même estimons que cela ne respecte plus la règle, vous risquez un kick ou un ban en fonction de l’humeur de la personne qui s'occupe de votre cas (en général c’est un ban direct avec moi)")
            .addField("__Chat écrit/ vocal__", " -Pas de spam, sous peine de bannissement. \n -Pas de pub sur les différents chats (sauf celui #pub), sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.")
            .addField("__Profil/Pseudo__", "- Ne doit pas être ressemblant/confondu avec celui d’un membre du staff, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n - Ne doit pas contenir de propos racistes, homophobes, sexistes … (genre la photo de profil Hitler on s’en passera) sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n -Ne doit pas avoir de caractère pornographique, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.")
            .addField("__Contacter le staff__", " Si pour une quelconque raison, vous voulez contacter un membre du staff (modo ou admin), mentionner les sur les chat publique \n -Si vous voulez entrer dans l’équipe de modération, contactez les Admin. Afin de devenir Modo vous passerez un genre d’entretien afin de voir vos motivations et vos idées pour améliorer le serveur. Ne stressez pas non plus, si vous êtes légitime ça se passera bien;). C’est histoire de voir à qui je donne le rôle de modo et d’apprendre à la connaître. La décision vous sera donnée ultérieurement par message privé.");

            message.channel.send({embeds: [embed]})
        };
        //!welcomeadd
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            
            embed
            .setColor("1b2b69")
            .setImage("https://cdn.discordapp.com/attachments/926810848205352991/929364277691813888/Sans_titre_2.gif");
            message.channel.send({embeds: [embed]})
        }
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            embed
            .setColor("#1b2b69")
            .setTitle("Bienvenue sur le serveur **Animeʷᵒʳˡᵈ ࿐**")
            .setDescription("Voici quelque information utiles pour vous!");
            message.channel.send({embeds: [embed]})
        }
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            embed
            .setColor("#1b2b69")
            .setTitle("Les rôles")
            .setDescription("voici les roles de se serveur")
            .addField("Les rôles d'administration:", "**✧ : Createur** : La créatrice de ce serveur\n **✧ : Responsable serveur**: Le rôle le plus haut. Ces personnes gère tout le serveur\n **˚✧˚ Responsable**: Sont les Administrateur du serveur\n **✧ : Modérateur**: Serve a la bonne ambiance de ce serveur")
            .addField("Les rôles que vous pouvez avoir:","**✧ : Soutien serveur (boost)**: A obtenir dès que vous booster le serveur")
            message.channel.send({embeds: [embed]})
        }
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            embed
            .setColor("#1b2b69")
            .setTitle("Ajoutez de la couleur a votre pseudo !!!")
            .setDescription("Disponible dans 🎨┆𝐂𝐨𝐥𝐨𝐫-𝐫𝐨̂𝐥𝐞");
            message.channel.send({embeds: [embed]})
        }
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            embed
            .setColor("#1b2b69")
            .setTitle("Le BOT")
            .setDescription("Notre serveur possède un bot discord. Utilisé !help pour voir la liste des commandes");
            message.channel.send({embeds: [embed]})
        }
        if(message.content === prefix + "welcomeadd"){
            const embed = new Discord.MessageEmbed();
            embed
            .setColor("#1b2b69")
            .setTitle("Voila vous savez tout")
            .setDescription("Bonne discution sur notre serveur")
            .setImage("https://giffiles.alphacoders.com/755/75591.gif");
            message.channel.send({embeds: [embed]})
        };

        //!addcolorembed
        if(message.content === prefix + "addcolorembed"){

            const embed = new Discord.MessageEmbed()
            .setColor("#1b2b69")
            .setTitle("Ajouter de la couleur a votre pseudo")
            .setDescription("Cliquer sur la réaction qui correspond au numéro pour avoir la couleur!")
            .setImage("https://media.discordapp.net/attachments/926630127633326132/927202435406114906/ecf69626-a949-49d0-8c99-2ee6f55c8006.png?width=1218&height=670")
            message.channel.send({embeds: [embed]})
        
            embed
            .setColor("#1b2b69")
            .setTitle("Couleur de 1 a 5")
            .setDescription("Cliquer sur la reaction de votre choix pour avoir votre roles")
            embed
            .setColor("#1b2b69")
            .setTitle("Couleur de 1 a 5")
            .setDescription("Cliquer sur la reaction de votre choix pour avoir votre roles")
            embed
            .setColor("#1b2b69")
            .setTitle("Couleur de 1 a 5")
            .setDescription("Cliquer sur la reaction de votre choix pour avoir votre roles")
            embed
            .setColor("#1b2b69")
            .setTitle("Couleur de 1 a 5")
               .setDescription("Cliquer sur la reaction de votre choix pour avoir votre roles")
        };
        //!ban
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionner")
            }
            else{
                if(mention.bannable){
                    mention.ban();

                    message.channel.send(mention.displayName + " a été banni avec succès")
                }
                else{
                    message.reply("impossible de bannir ce membre")
                }
            }
        }
        //!kick
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionner")
            }
            else{
                if(mention.kickable){
                    mention.kick();

                    message.channel.send(mention.displayName + " a été kick avec succès")
                }
                else{
                    message.reply("impossible de kick ce membre")
                }
            }
        };
    }
    //!clear
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("Nombre de message a supprimé non ou mal défini.Réessayer")
            }
            else{
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message a supprimé non ou mal défini.Réessayer");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("suppression de " + messages.size + " message(s) réussi");

                        const embed = new Discord.MessageEmbed()
                        .setColor("#1b2b69")
                        .setTitle("Clear de " + number + " message")
                        .setDescription("Des messages on été supprimé !")
                        .setImage("https://media3.giphy.com/media/26ybwwiZmci3DJdYs/giphy.gif")
                        message.channel.send({embeds: [embed]});

                    }).catch(err => {
                        console.log("Erreur de Clear : " + err);
                    })
                }
            }
        }
    }
    else {
        message.reply("vous n'avez pas la permission pour cette commande!")
    };
    

    
});


    











Client.on("messageCreate", message => {
    if(message.content.startsWith(prefix + "modo")){
        message.guild.channels
            .create("aide n°", {})
        .then((channel) => {
            console.log(channel)
            const categoryId = '940678066261331969'
            channel.setParent(categoryId)
        })
    }
})
        





//helpButton
Client.on("messageCreate", message => {
    if(message.member.permissions.has("ADMINISTRATOR")){

            //help modo
            if(message.content.startsWith(prefix + "modoAide")){
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("helpModo")
                        .setLabel("Contacter un modo")
                        .setStyle("DANGER")
                        .setEmoji("💬")
                    );
            message.channel.send({content: "Cliquer pour crée un channel d'aide", components: [row]});
            
        };
    }
});
Client.on("interactionCreate",interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "helpModo"){
            interaction.guild.channels
            .create("channel aide de " + interaction.user.id, {})
            .then((channel) => {
                console.log(channel)
                const categoryId = '940678066261331969'
                channel.setParent(categoryId)
                channel.send( "<@" + interaction.user.id + "> dite nous votre problème ici")
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("helpModoSuprr")
                        .setLabel("Problème résolu")
                        .setStyle("SUCCESS")
                        .setEmoji("📮")
                    );
                channel.send({content: "Cliquer ici quand vous aurez résolu votre problème", components: [row]})
                }
            )
        }
        if(interaction.customId === "helpModoSuprr"){
            interaction.guild.channels
            interaction.channel.delete().then((channel) => {});

        }
        
    }
}) 













//!help
Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "help")){
        var row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("help")
                    .setPlaceholder("Selectionner une option")
                    .addOptions([
                        {
                            label: "Commande bot",
                            description: "Vous chercher une commande du bot?",
                            value: "option1"
                        },
                        {
                            label: "Couleur",
                            description: "Vous chercher a modifier la couleur de votre pseudo?",
                            value: "option2"
                        },
                        {
                            label: "Rôles",
                            description: "Vous chercher un role en particulier?",
                            value: "option3"
                        },
                        {
                            label: "Information",
                            description: "Vous souhaiter avoir des information sur le serveur",
                            value: "option4"
                        },
                        {
                            label: "???",
                            description: "Vous ne trouver pas ce que vous chercher?",
                            value: "option6"
                        }
                        
                    ])
            ) 
        message.channel.send({content: "Vous chercher de l'aide", components: [row]});
    };
});
Client.on("interactionCreate", interaction => {
    if(interaction.isSelectMenu()){
        if(interaction.customId === "help"){
            console.log(interaction.values);

            if(interaction.values == "option1"){
                interaction.reply("pas fini")

                
            }
            if(interaction.values == "option2"){
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle("Utilisée les commande slash (⌐■_■)")
                .setImage("https://i.pinimg.com/originals/09/1f/28/091f280b10efb5e5d7e9f49b6d3c6cb0.gif")
                .setTimestamp();
    
               interaction.channel.send({ embeds: [embed]});
            }
            if(interaction.values == "option3"){
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle("Pour trouvée votre roles, aller dans le salon: #🎏┆𝐑𝐨̂𝐥𝐞𝐬¹ ou le salon #🎐┆𝐑𝐨̂𝐥𝐞𝐬².")
                .setDescription("Vous pouvez toujours propser des idée de rôles dans la categorie suggestion!")
                .setImage("https://c.tenor.com/5FQA4XpJDToAAAAd/anime.gif")
                .setTimestamp();
    
               interaction.channel.send({ embeds: [embed]});
            }
            if(interaction.values == "option4"){
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle("Pour tout information, partenariat ou autre, merci d'envoyer un DM a @clemovie.")
                .setDescription("Ou a tout autre Modérateur sous reserve de non spam")
                .setImage("https://c.tenor.com/2c7diqh1oVIAAAAC/anime-computer.gif")
                .setTimestamp();
    
               interaction.channel.send({ embeds: [embed]});
            }
            if(interaction.values == "option6"){
                const embed = new Discord.MessageEmbed()
                .setColor("#1b2b69")
                .setTitle("Vous ne trouvez pas? Rendez-vous alors dans le salon si dessous 😀.")
                .setDescription("Un modérateur répondras a toute vos question.")
                .setImage("https://acegif.com/wp-content/gif/anime-hug-91.gif")
                .setTimestamp();
    
               interaction.channel.send({ embeds: [embed]});
               interaction.channel.send("<#941746145112231956>")
            }
        }
    }
});














Client.login(process.env.TOKEN);