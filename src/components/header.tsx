import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import Logo from "../assets/Logo.svg";

export function Header() {
    return (
        <header className="w-full flex items-center justify-between py-8 px-40">
            <img src={Logo} alt="Coffee Delivery Logo" />
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 bg-purple-light px-2 py-2 rounded-md cursor-pointer">
                    <MapPinIcon size={20} weight="fill" className="text-purple" />
                    <span className="roboto-text-s text-purple-dark">Porto Alegre, RS</span>
                </button>
                <button className="relative flex items-center gap-1 bg-yellow-light px-2 py-2 rounded-md cursor-pointer">
                    <div className="absolute flex items-center justify-center -top-2 -right-2 w-5 h-5 rounded-full bg-yellow-dark text-white text-[12px] font-roboto font-normal">3</div>
                    <ShoppingCartIcon size={20} weight="fill" className="text-yellow-dark " />
                </button>
            </div>
        </header>
    )
}