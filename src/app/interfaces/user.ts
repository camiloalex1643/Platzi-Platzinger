export interface User{
    nick: string,
    
    //Campos opcionales
    subnick?: string,
    age?: number,
    
    email: string,
    friend: boolean,
    uid: any,
    status: string
}