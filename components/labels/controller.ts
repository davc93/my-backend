
const collection = 'labels'
const controller  = (injectedStore:any) => {
    const store = injectedStore

    const upsert = async (data:any) => {
      
      const response = await store.upsert(data,collection)
      return 'Ingreso exitoso'
      
      

    }
    const list = async () => {
      const services = await store.list(collection)
      return services
    }
    const get =async (id:string) => {
      const service = await store.get(id,collection)
      return service
    }

    return {
        upsert,
        list,
        get
    }
}



export default controller