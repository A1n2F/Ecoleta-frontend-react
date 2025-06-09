import { useEffect, useState, type ChangeEvent } from "react";

import { Header } from "../../components/Header";
import { ItemCard } from "../../components/ItemCard";

import arrow from "../../assets/arrow.svg";

import { Map } from "../../components/Map";

import api from "../../services/api"

import axios from "axios";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import type { LeafletMouseEvent } from "leaflet";

interface Item {
    id: number
    title: string
    image_url: string
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string
}

export function CreatePoint() {
    const [items, setItems] = useState<Item[]>([])
    const [ufs, setUfs] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

    const [selectedUf, setSelectedUf] = useState("0")
    const [selectedCity, setSelectedCity] = useState("0")

    useEffect(() => {
        api.get("items").then(response => {
            setItems(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get<IBGEUFResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)

            setUfs(ufInitials)
        })
    }, [])

    useEffect(() => {
        if(selectedUf === "0") {
            return
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            const cityNames = response.data.map(city => city.nome)

            setCities(cityNames)
        })
    }, [selectedUf])

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value

        setSelectedUf(uf)
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value

        setSelectedCity(city)
    }

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
                                <Map />
                            </div>
                        </div>

                        <div className="mt-4 flex gap-4">
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="numero" className="text-[#6C6C80]">Estado (UF)</label>
                                <select 
                                    value={selectedUf} 
                                    onChange={handleSelectUf} 
                                    name="uf" 
                                    id="uf" 
                                    className="px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2"
                                >
                                    <option value="0">Selecione uma UF</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4 flex flex-col w-full">
                                <label htmlFor="city" className="text-[#6C6C80]">Cidade</label>
                                <select 
                                    name="city" 
                                    id="city" 
                                    value={selectedCity}
                                    onChange={handleSelectCity}
                                    className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2"
                                >
                                    <option 
                                        id="city"
                                        className="w-full px-2 py-3 bg-[#F0F0F5] rounded-xl mt-2" 
                                    />
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mt-16">
                         <legend className="w-full flex items-center justify-between mb-10">
                            <h2 className="text-2xl text-[#322153] font-bold">Itens de coleta</h2>
                            <span>Selecione um ou mais itens abaixo</span>
                        </legend>

                        <ul className="w-full grid grid-cols-3 gap-4">
                            {items.map(item => (
                                <ItemCard key={item.id}
                                    imageHero={item.image_url}
                                    title={item.title}
                                />
                            ))}
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