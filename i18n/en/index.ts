import cv from './_cv'

export default {
    cv,
    settings: {
        languages: {
            title: 'Choose languages',
            vi: 'Vietnamese',
            en: 'English'
        },
        download: {
            title: 'Download my CV',
            vi: 'Vietnamese version',
            en: 'English version'
        }
    },
    system: {
        CVHeaderTitle: {
            summary: 'summary',
            skills: 'technical skills',
            experience: 'Professional Expericence',
            education: 'education',
            additionalInformation: 'additional information'
        },
        CVWorkDetails: {
            project: 'Project',
            description: 'Description',
            technologies: 'Technologies',
            responsibilities: 'Responsibilities'
        },
        messages: {
            savePDF: {
                error: 'ERROR',
                errorMsg: 'Something went wrong!',
                changeThemeDark: 'Switching to dark mode...',
                changeThemeLight: 'Switching to light mode...',
                'changeLang-vi': 'Switching language to Vietnamese...',
                'changeLang-en': 'Switching language to English...',
                autogen: 'This CV has been automatically generated by the system.'
            }
        },
        footer: {
            intro: 'Powered by Nuxt3. Designed by me'
        }

    },
    app: {
        name: `Tan Duong Van's CV`,
        content: `Content`
    }
}