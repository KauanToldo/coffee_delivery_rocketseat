import { MinusIcon, PlusIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react";

interface CoffeeCardProps {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    categories: string[];
}

export function CoffeeCard({ id, image, name, description, price, categories }: CoffeeCardProps) {
    return (
        <div className="rounded-br-md rounded-tl-md rounded-bl-[36px] rounded-tr-[36px] bg-base-card px-6 pb-5 flex flex-col items-center text-center">
            <img src={image} alt={name} className="w-30 h-30 -mt-5" />
            <div className="flex gap-2 mt-3 mb-4">
                {categories.map((category, index) => (
                    <span key={index} className="bg-yellow-light text-yellow-dark text-[10px] font-roboto font-bold uppercase px-2 py-1 rounded-full">
                        {category}
                    </span>
                ))}
            </div>
            <h2 className="baloo-title-s text-base-subtitle mb-2">{name}</h2>
            <p className="roboto-text-s text-base-label mb-8">{description}</p>
            <div className="flex items-center">
                <span className="roboto-text-m text-base-text mr-3">R$ <strong className="baloo-title-m">{price.toFixed(2)}</strong></span>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-base-button rounded-md">
                        <button className="px-2 py-2 text-purple hover:text-purple-dark cursor-pointer">
                            <MinusIcon size={16} weight="bold" />
                        </button>
                        <span className="px-2 py-2 text-base-title roboto-text-m">1</span>
                        <button className="px-2 py-2 text-purple hover:text-purple-dark cursor-pointer">
                            <PlusIcon size={16} weight="bold" />
                        </button>
                    </div>
                    <button className="bg-purple-dark hover:bg-purple transition-colors px-2 py-2 rounded-md cursor-pointer">
                        <ShoppingCartSimpleIcon size={16} weight="fill" className="text-white roboto-text-m" />
                    </button>
                </div>
            </div>
        </div>
    )
}