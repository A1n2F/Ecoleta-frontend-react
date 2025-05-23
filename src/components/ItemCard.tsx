interface ItemCardProps {
    imageHero: string
    title: string
}

export function ItemCard({ imageHero, title }: ItemCardProps) {
    return (
        <li className="bg-[#F0F0F5] w-[192px] h-[184px] flex flex-col items-center justify-center rounded-xl">
            <img src={imageHero} alt="" />
            <h2 className="text-xl mt-2 max-w-20 text-center">{title}</h2>
        </li>
    )
}