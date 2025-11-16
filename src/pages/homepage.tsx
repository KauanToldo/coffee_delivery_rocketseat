import { Header } from "../components/header";
import Background from "../assets/Background.png";
import HomeImage from "../assets/home_image.png";
import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";

export function Homepage() {
    return (
        <div className="w-full">
            <Header />
            <main className="flex items-center justify-between px-40 pt-[100px] pb-[140px]" style={{ backgroundImage: `url(${Background})` }}>
                <div className="flex flex-col gap-16 max-w-[600px]">
                    <div>
                        <h1 className="self-stretch justify-start baloo-title-xl">Encontre o café perfeito para qualquer hora do dia</h1>
                        <p className="roboto-text-l mt-4">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <div>
                        <ul className="grid grid-cols-2 gap-y-5 gap-x-2">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow-dark rounded-full flex items-center justify-center">
                                    <ShoppingCartIcon size={16} weight="fill" className="text-white" />
                                </div>
                                <span>Compra simples e segura</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                    <PackageIcon size={16} weight="fill" className="text-white" />
                                </div>
                                <span>Embalagem mantém o café intacto</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                                    <TimerIcon size={16} weight="fill" className="text-white" />
                                </div>
                                <span>Entrega rápida e rastreada</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center">
                                    <CoffeeIcon size={16} weight="fill" className="text-white" />
                                </div>
                                <span>O café chega fresquinho até você</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={HomeImage} alt="Home" className="w-[470px] h-[360px]" />
            </main>
        </div>
    )
}