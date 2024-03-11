import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "../Hamburgers/Hamburgers.style";
import {
    ProductCardContent,
    ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Hamburgers() {
    const [isLoading, setIsloading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const priceFormat = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    const getCategories = async () => {
        const url = "http://localhost:8000/categories"
        setIsloading(true);
        try {
            const response = await fetch(url)
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('cabô');
            setIsloading(false);
        }
    };

    const getHamburgers = async () => {
        const url = "http://localhost:8000/hamburgers"
        setIsloading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);

        } finally {
            console.log('finnaly');
            setIsloading(false);
        }
    };


    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getHamburgers();
    }, []);

    return (
        <Layout>
            <h1>Combos</h1>
            <ProductCategories>
                {isLoading ? (<p>Carregando</p>)
                    : (
                        categories.map((item, index) => (
                            <CategoryList key={index} data={item} />

                        ))
                    )}
            </ProductCategories>
            <ProductWrapper>
                {isLoading
                    ? (<p>Carregando</p>)
                    : (
                        products.map((product, index) => (
                            <ProductCard key={index}>
                                <ProductCardContent>
                                    <h2>{product.title}</h2>
                                    <p>{`${product.description} + BATATA TRADICIONAL E BEBIDA`}</p>
                                    <Button onClick={() => { }}>Adicionar</Button>
                                </ProductCardContent>
                                <ProductCardPrice>
                                    {priceFormat(product.values.combo)}
                                </ProductCardPrice>
                                <img src={product.image[1]} alt={product.title} />
                            </ProductCard>
                        ))
                    )
                }
            </ProductWrapper>
        </Layout>
    );
}