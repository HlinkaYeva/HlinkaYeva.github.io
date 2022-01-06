const menu = document.getElementById('menu');

function Heading() {
    return (
        <div className="heading">
            <img src="img/title-img.png" alt=""/>
            <h3>our menu</h3>
        </div>
    )
}
class HeadingDraw extends React.Component {
    render() {
        return (
            <Heading />
        )
    }
}


function Product(props) {
    return (
        <div className="box" data-aos="fade-up" data-aos-delay={props.product.delay}>
                <img src={props.product.nameImg} alt={props.product.name}/>
                <div className="content">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <h3>{props.product.name}</h3>
                    <div className="price">{props.product.price}</div>
                    <a href="#" className="btn">add to cart</a>
                </div>
        </div>
    )
}

class OutputToPage extends React.Component {
    state = {
        products: [
            { name: 'cheese hamburger', nameImg: 'img/product-1.png', price: '25.99$', delay: '150'},
            { name: 'double cheeseburger', nameImg: 'img/product-2.png', price: '24.99$', delay: '200' },
            { name: 'Big Mac ', nameImg: 'img/product-3.png', price: '20.99$', delay: '250' },
            { name: 'cheeseburger', nameImg: 'img/product-4.png', price: '26.99$', delay: '300' },
            { name: 'quarter pounder', nameImg: 'img/product-5.png', price: '15.99$', delay: '350' },
            { name: 'McDouble', nameImg: 'img/product-6.png', price: '18.99$', delay: '400' }
        ]
    }
    renderProducts() {
        return this.state.products.map(product => {
            return (
                <Product 
                    product = {product} key = {product.name + Math.random()}
                />
            )
        })
    }
    render() {
        
        return (
            <div className="box-container">
                { this.renderProducts() }
            </div>
        )
    }
}

class Okey extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeadingDraw />
                <OutputToPage />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Okey />, menu);
