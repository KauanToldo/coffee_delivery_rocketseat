import ExpressoImg from "../assets/coffees/Expresso.png"
import AmericanoImg from "../assets/coffees/Americano.png"
import ExpressoCremosoImg from "../assets/coffees/Expresso Cremoso.png"
import CafeGeladoImg from "../assets/coffees/Café Gelado.png"
import CafeComLeiteImg from "../assets/coffees/Café com Leite.png"
import LatteImg from "../assets/coffees/Latte.png"
import CapuccinoImg from "../assets/coffees/Capuccino.png"
import MacchiatoImg from "../assets/coffees/Macchiato.png"
import MochaccinoImg from "../assets/coffees/Mochaccino.png"
import ChocolateQuenteImg from "../assets/coffees/Chocolate Quente.png"
import CubanoImg from "../assets/coffees/Cubano.png"
import HavaianoImg from "../assets/coffees/Havaiano.png"
import ArabeImg from "../assets/coffees/Árabe.png"
import IrlandesImg from "../assets/coffees/Irlandês.png"

export interface Coffee {
    id: number
    image: string
    name: string
    description: string
    price: number
    categories: string[]
}

export const coffees: Coffee[] = [
    {
        id: 1,
        image: ExpressoImg,
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        categories: ["Tradicional"]
    },
    {
        id: 2,
        image: AmericanoImg,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        categories: ["Tradicional"]
    },
    {
        id: 3,
        image: ExpressoCremosoImg,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        categories: ["Tradicional"]
    },
    {
        id: 4,
        image: CafeGeladoImg,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        categories: ["Tradicional", "Gelado"]
    },
    {
        id: 5,
        image: CafeComLeiteImg,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.90,
        categories: ["Tradicional", "Com Leite"]
    },
    {
        id: 6,
        image: LatteImg,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        categories: ["Tradicional", "Com Leite"]
    },
    {
        id: 7,
        image: CapuccinoImg,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90,
        categories: ["Tradicional", "Com Leite"]
    },
    {
        id: 8,
        image: MacchiatoImg,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.90,
        categories: ["Tradicional", "Com Leite"]
    },
    {
        id: 9,
        image: MochaccinoImg,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        categories: ["Tradicional", "Com Leite"]
    },
    {
        id: 10,
        image: ChocolateQuenteImg,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        categories: ["Especial", "Com Leite"]
    },
    {
        id: 11,
        image: CubanoImg,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        categories: ["Especial", "Alcoólico", "Gelado"]
    },
    {
        id: 12,
        image: HavaianoImg,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.90,
        categories: ["Especial"]
    },
    {
        id: 13,
        image: ArabeImg,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        categories: ["Especial"]
    },
    {
        id: 14,
        image: IrlandesImg,
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        categories: ["Especial", "Alcoólico"]
    }
]
