// Интерфейсы заметок и пользователей
export interface Card{
    note_id:number;
    header:string;
    text:string;
    date:string;
    
}
export interface User{
    id:number;
    login:string;
    password:string;
    token:string;
    authdata?: string;
}