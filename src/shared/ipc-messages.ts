export type Platform = 'twitch' | 'trovo';

export default interface IpcMessages {
    getUserByName: {
        payload: {
            platformId: Platform,
            username: string
        }
    },
    foo: {
        payload: {
            bar: boolean
        }
    }
}