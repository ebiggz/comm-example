import IpcMessages from "../shared/ipc-messages";
export function register<M extends keyof IpcMessages>(method: M, callback: (payload: IpcMessages[M]['payload']) => void) : void {
    console.log(method, callback);
}