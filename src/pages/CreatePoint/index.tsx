import { Header } from "../../components/Header";
import { ItemCard } from "../../components/ItemCard";

import { MapContainer, TileLayer, Marker } from "react-leaflet"

import arrow from "../../assets/arrow.svg";
import lampada from "../../assets/lampada.svg"
import pilhas from "../../assets/pilhas.svg"
import paper from "../../assets/paper.svg"
import oleo from "../../assets/oleo.svg"
import organic from "../../assets/organic.svg"
import eletronic from "../../assets/eletronic.svg"
import { Map } from "../../components/Map";

export function CreatePoint() {
    return (
        <div className="w-full h-full bg-[#F0F0F5]">
            <header className="flex items-center justify-between">
                <Header />

                <a href="/" className="flex gap-1 items-center mr-16 mt-5">
                    <img src={arrow} alt="" />
                    <p className="text-[#322153] font-semibold hover:text-[#655488] transition-colors">Voltar para home</p>
                </a>
            </header>

            <div className="flex flex-col items-center justify-center py-20">
                <form className="w-[736px] bg-white p-16 rounded-xl">
                    <h1 className="text-4xl text-[#322153] font-bold max-w-[270px]">Cadastro do ponto de coleta</h1>

                    <div className="w-full h-[304px] bg-[#34CB79]/30 mt-16 p-8 rounded-xl">
                        <div className="border-2 border-dashed border-[#8de0b2] flex flex-col items-center justify-center h-full rounded-xl">
                            <p>icone</p>
                            <p>imagem do estabelecimento</p>
                        </div>
                    </div>

                    <fieldset className="mt-16">
                         <legend className="w-full">
                            <h2 className="mb-10 text-2xl text-[#322153] font-bold">Dados</h2>

                            <div className="mb-4">
                                <label htmlFor="name" className="text-[#6C6C80]">Nome da entidade</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="text-[#6C6C80]">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="telefone" className="text-[#6C6C80]">Telefone</label>
                                <input 
                                    type="number"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="(  )"
                                    className="w-[292px] px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                />
                            </div>
                        </legend>
                    </fieldset>

                    <fieldset className="mt-16">
                         <legend className="w-full flex items-center justify-between mb-10">
                            <h2 className="text-2xl text-[#322153] font-bold">Endereço</h2>
                            <span>Selecione o endereço no mapa</span>
                        </legend>

                        <div className="w-full h-[304px] rounded-xl">
                            <div className="flex flex-col items-center justify-center h-full rounded-xl">
                                <MapContainer center={[-29.7874701, -55.7909598]} zoom={15} scrollWheelZoom={true} className="w-full h-full">
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[-29.7874701, -55.7909598]} />
                                    
                                </MapContainer>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-4">
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="numero" className="text-[#6C6C80]">Estado (UF)</label>
                                <select name="uf" id="uf" className="px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2">
                                    <option value="0">Selecione uma UF</option>
                                </select>
                            </div>

                            <div className="mb-4 flex flex-col w-full">
                                <label htmlFor="city" className="text-[#6C6C80]">Cidade</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                />
                            </div>
                        </div>

                            <div className="mb-4 flex flex-col w-full">
                                <label htmlFor="estado" className="text-[#6C6C80]">Estado</label>
                                <input 
                                    type="text"
                                    name="estado"
                                    id="cidade"
                                    className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                />
                            </div>
                    </fieldset>

                    <fieldset className="mt-16">
                         <legend className="w-full flex items-center justify-between mb-10">
                            <h2 className="text-2xl text-[#322153] font-bold">Itens de coleta</h2>
                            <span>Selecione um ou mais itens abaixo</span>
                        </legend>

                        <ul className="w-full grid grid-cols-3 gap-4">
                            <ItemCard 
                                imageHero={lampada}
                                title="Lâmpada"
                            />

                            <ItemCard 
                                imageHero={pilhas}
                                title="Pilhas e Baterias"
                            />

                            <ItemCard 
                                imageHero={paper}
                                title="Papéis e Papelão"
                            />

                            <ItemCard 
                                imageHero={eletronic}
                                title="Resíduos Eletrônicos"
                            />

                            <ItemCard 
                                imageHero={organic}
                                title="Resíduos Orgânicos"
                            />

                            <ItemCard 
                                imageHero={oleo}
                                title="Óleo de Cozinha"
                            />
                        </ul>
                    </fieldset>

                    <div className="mt-16 flex items-center justify-end">
                        <button type="submit" className="py-6 px-6 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors
                        cursor-pointer">
                            Cadastre um ponto de coleta
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}