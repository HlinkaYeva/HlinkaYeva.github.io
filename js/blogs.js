const blog = document.getElementById('blogs');

function Heading() {
    return (
        <div className="heading">
            <img src="img/title-img.png" alt=""/>
            <h3>daily posts</h3>
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


function BlogsDraw(props) {
    return (
        <div className="box" data-aos="fade-left" data-aos-delay={props.res.delay}>
            <div className="image">
                <img src={props.res.nameImg} alt={props.res.heading}/>
                <div className="icons">
                    <a href="#">
                        <i className="fas fa-calendar"></i>
                        {props.res.date}
                    </a>
                    <a href="#">
                        <i className="fas fa-user"></i>
                        {props.res.userName}
                    </a>
                </div>
            </div>
            <div className="content">
                <h3>{props.res.heading}</h3>
                <p>{props.res.content}</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
    )
}

class OutputToPage extends React.Component {
    state = {
        blogs: [
            { nameImg: 'img/blog-1.jpg', heading: 'blog title goes here...', date: '21st may, 2022', userName: 'admin', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugit?', delay: '150'},
            { nameImg: 'img/blog-2.jpg', heading: 'blog title goes here...', date: '25st may, 2022', userName: 'admin', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugit?', delay: '200'},
            { nameImg: 'img/blog-3.jpg', heading: 'blog title goes here...', date: '26st may, 2022', userName: 'admin', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugit?', delay: '250'}
        ]
    }
    renderReviews() {
        return this.state.blogs.map(res => {
            return (
                <BlogsDraw 
                    res = {res} key = {res.heading + Math.random()}
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

ReactDOM.render(<Okey />, blog);
