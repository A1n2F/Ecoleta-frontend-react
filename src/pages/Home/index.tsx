import { Header } from "../../components/Header";

import pessoas from "../../assets/Pessoas.png";
import entrar from "../../assets/entrar.svg"

export function Home() {
    return (
        <div className="w-screen h-screen bg-[#F0F0F5]">
            <Header />
            <div className="flex items-center justify-center mt-40 gap-40">
                <div>
                    <h1 className="text-5xl text-[#322153] font-bold max-w-[560px] leading-16">
                        Seu marketplace de coleta de resíduos.
                    </h1>
                    
                    <p className="text-2xl text-[#6C6C80] max-w-[448px] mt-6">
                        Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                    </p>

                    <a href="/cadastro" className="flex mt-10">
                        <img src={entrar} alt="" className="py-6 px-6 bg-green-600 rounded-l-xl hover:bg-green-500 transition-colors" />
                        
                        <strong className="py-6 px-6 bg-green-500 text-white rounded-r-xl hover:bg-green-600 transition-colors">
                            Cadastre um ponto de coleta
                        </strong>
                    </a>
                </div>

                <div>
                    <img src={pessoas} alt="" />
                </div>
            </div>
        </div>
    )
}