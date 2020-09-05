import * as comm from './comm-main';


comm.register('getUserByName', async (payload) => {
    const platform = platformManager.getPlatform(payload.platformId);
    return platform.getUserByName(payload.username)
})