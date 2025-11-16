import { MapPinIcon } from "@phosphor-icons/react";
import Logo from "../assets/Logo.svg";

export function Header() {
    return (
        <header className="w-full flex items-center justify-between py-8 px-40">
            <img src={Logo} alt="Coffee Delivery Logo" />
            <div>
                <button className="flex items-center gap-1 bg-purple-light px-2 py-2 rounded-md cursor-pointer">
                    <MapPinIcon size={20} weight="fill" className="text-purple" />
                    <span className="roboto-text-s text-purple-dark">Porto Alegre, RS</span>
                </button>
            </div>
        </header>
    )
}