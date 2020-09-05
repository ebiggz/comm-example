import IpcMessages from "../shared/ipc-messages";
export function invoke<M extends keyof IpcMessages>(method: M, payload: IpcMessages[M]['payload']) : void {
    console.log(payload);
}
