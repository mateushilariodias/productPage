"use client";
import { useEffect, useState } from "react";
import axios from "axios";

function HeroSection() {
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        const fetchCategoryImage = async () => {
            try {
                const response = await axios.get<Category[]>("https://api.escuelajs.co/api/v1/categories/");
                if (response.data.length > 0) {
                    setImageUrl(response.data[0].image);
                }
            } catch (error) {
                console.error("Erro ao buscar a imagem da categoria:", error);
            }
        };

        fetchCategoryImage();
    }, []);

    return (
        <section className="relative flex items-center justify-center bg-white text-center w-full py-3 px-4 lg:py-16 lg:px-28">
            {/* Imagem de fundo */}
            <div
                className="absolute inset-0 bg-cover bg-center w-full h-full lg:px-4"
                style={{ backgroundImage: `url(${imageUrl})`, paddingLeft: "15px", paddingRight: "15px" }}
            ></div>

            {/* Overlay escura */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Conteúdo sobreposto */}
            <div className="relative z-10 text-white">
                <h2 className="text-3xl font-bold">New Clothing Collection</h2>
                <button className="mt-6 px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition duration-300">
                    Shop Now
                </button>
            </div>
        </section>
    );
}

export default HeroSection;