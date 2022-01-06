const reviews = document.getElementById('reviews');

function Heading() {
    return (
        <div className="heading">
            <img src="img/title-img.png" alt=""/>
            <h3>testimonial</h3>
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


function ReviewsDraw(props) {
    return (
        <div className="box swiper-slide" data-aos="fade-up" data-aos-delay={props.rev.delay}>
            <img src={props.rev.nameImg} alt={props.rev.name}/>
            <h3>{props.rev.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nesciunt possimus facilis voluptas ipsa aspernatur ullam atque commodi maiores ea!</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>
    )
}

class OutputToPage extends React.Component {
    state = {
        reviews: [
            { name: 'sara parker', nameImg: 'img/pic-1.png', delay: '150'},
            { name: 'john deo', nameImg: 'img/pic-2.png', delay: '200'},
            { name: 'judith taylor', nameImg: 'img/pic-3.png', delay: '250'}
        ]
    }
    renderReviews() {
        return this.state.reviews.map(rev => {
            return (
                <ReviewsDraw 
                    rev = {rev} key = {rev.name + Math.random()}
                />
            )
        })
    }
    render() {
        return (
            <React.Fragment>
                { this.renderReviews() }
            </React.Fragment>
        )
    }
}

class Okey extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeadingDraw />
                <div className="box-container">
                    <OutputToPage />
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Okey />, reviews);
