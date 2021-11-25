import './styles.css';

import ProductImg from 'assets/images/product.png';

const ProductCard = () => {

    return (

        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className="card-botao-container">
            <button>COMPRAR</button>
            </div>
        </div>

    );
}

export default ProductCard;