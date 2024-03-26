export const productList:Products[] = [
    {id:1,name: "Laptop HP", price: 514, detail: "i3, 16 GB RAM, 500 DD"},
    {id:2,name: "PC Gamer", price: 800, detail: "i9, 32 GB RAM, 500 DD"},
    {id:3,name: "Impresora ASUS", price: 300, detail: "Mil cartuchos"},
    {id:4,name: "Teclado LED", price: 50, detail: "Teclas brillantes"},
    {id:5,name: "Mouse KingStone", price: 30},
]


export interface Products{
    id:number;
    name:string;
    price:number;
    detail?:string;
}