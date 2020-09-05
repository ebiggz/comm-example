export default interface IpcMessages {
    setName: {
        payload: {
            name: string
        }
    },
    foo: {
        payload: {
            bar: boolean
        }
    }
}