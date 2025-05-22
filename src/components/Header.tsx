import logo from "../assets/logo.png";

export function Header() {
    return (
        <header className="flex gap-4 pt-6 pl-10">
            <img src={logo} alt="" className="w-12 h-10" />
            <h1 className="text-4xl text-[#322153] font-bold">Ecoleta</h1>
        </header>
    )
}