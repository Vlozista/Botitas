module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTI5MDE4NjU1MDI1NjM0MTAxNA.GQi13X.17g6iiu5J-SdlTksvp2VpA0b7EYPhxFTqe-zKI',
        playing: 'Fap Fap Fap',
        global: true,
        guild: process.env.GUILD_ID || '344247984642588674',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
