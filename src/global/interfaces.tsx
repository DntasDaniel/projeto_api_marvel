
export interface Icomics {
    id: string,
    title: string,
    urls: [{
        type: string,
        url: string
    }]
    creators: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string,
            role: string
        }],
    },
    series: {
        name: string,
        resourseURI: string
    },
    stories: {
        available: number,
        collectionURI: string,
        items: [{
            name: string,
            resourceURI: string,
            type: string
        }],


    }

}
export interface ICharacters {
    id: String,
    name: String,
    urls: Array<{ type: string, url: string }>,
    thumbnail: {
        extension: String,
        path: String
    },
    series: {
        name: String,
        resourseURI: String,
        items: Array<{ name: string, resourceURI: string }>
    },
    stories: {
        available: Number,
        collectionURI: String,
        items: Array<{
            name: string,
            resourceURI: string,
            type: string
        }>,
    }

}
export interface ISeries {
    id: string,
    title: string,
    description: string | null,
    startYear: string,
    endYear: string,
    thumbnail: {
        extension: string,
        path: string
    },

}