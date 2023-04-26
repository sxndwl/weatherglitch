import Sun from '../img/Sun.svg'
import Thunderstorm from '../img/Thunderstorm.svg'
import Snow from '../img/Snow.svg'
import Cloud from '../img/Cloud.svg'
import Rain from '../img/Rain.svg'

export const theme = {
    sunny: {
        gradient: 'radial-gradient(50% 50% at 50% 50%, #FF3C3C 0%, rgba(196, 196, 196, 0) 100%);',
        colors: {
            backgroundColor: '#FFEF5F',
            textColor: '#000000',
        },
        emoji: Sun
    },
    thunderstorm: {
        gradient: 'radial-gradient(50% 50% at 50% 50%, #6BFF5F 0%, rgba(196, 196, 196, 0) 100%);',
        colors: {
            backgroundColor: '#4D4D4D',
            textColor: '#000000',
            dataColor: '#FFEF5F'
        },
        emoji: Thunderstorm
    },
    snowy: {
        gradient: 'radial-gradient(50% 50% at 50% 50%, #182FFF 0%, rgba(196, 196, 196, 0) 100%);',
        colors: {
            backgroundColor: '#FFFFFF',
            textColor: '#182FFF',
            dataColor: '#182FFF'
        },
        emoji: Snow
    },
    cloudy: {
        gradient: 'radial-gradient(50% 50% at 50% 50%, #F7F7F7 0%, rgba(196, 196, 196, 0) 100%);',
        colors: {
            backgroundColor: '#182FFF',
            textColor: '#17BE08',
            dataColor: '#FFFFFF'
        },
        emoji: Cloud
    },
    rainy: {
        gradient: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(196, 196, 196, 0) 100%);',
        colors: {
            backgroundColor: '#1627BF',
            textColor: '#17BE08',
            dataColor: '#FFFFFF'
        },
        emoji: Rain
    }
}