

const collection = 'preferences'
const controller  = (injectedStore:any) => {
    const store = injectedStore
    const upsert = async (data:any) => {
        const response = store.upsert(data,collection)
        return response
    }

    return {
        upsert
    }
}



export default controller