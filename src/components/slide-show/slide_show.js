import Link from "next/link";
import { Component } from "react";
import "./slide_show.scss";

class SlideShow extends Component {
  state = {
    currentIndex: 1,
    posts: [],
    numberOfPost: 0
  };

  componentDidMount() {
    const { posts } = this.props;
    const numberOfPost = posts ? posts.length : 0;
    if (numberOfPost < 1) return;
    for (let index = 0; index < posts.length; index++) {
      posts[index].index = index + 1;
    }
    this.setState({ posts: posts, numberOfPost: numberOfPost });
  }

  componentWillUnmount() {}

  GoToIndex = index => {
    if (index > this.state.numberOfPost) this.setState({ currentIndex: 1 });
    if (index < 1) this.setState({ currentIndex: this.state.numberOfPost });
    this.setState({ currentIndex: index });
  };

  HandleIncrement = () => {
    this.state.currentIndex >= this.state.numberOfPost
      ? this.setState({ currentIndex: 1 })
      : this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
  };

  HandleDecrement = () => {
    this.state.currentIndex < 2
      ? this.setState({ currentIndex: this.state.numberOfPost })
      : this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1
        }));
  };

  render() {
    if (this.state.numberOfPost < 1) {
      return <h4>Sem posts até o momento</h4>;
    }

    return (
      <>
        <div className="slideshow-container">
          {this.state.posts.map(post => (
            <Link
              href="/post/[id]"
              as={`/post/${post.slug}`}
              key={post.index}
              passHref
            >
              <div
                className={`${
                  post.index === this.state.currentIndex
                    ? "slideshow-content-show"
                    : "slideshow-content-hide"
                } fade`}
              >
                <div className="slideshow-content-image-box">
                  <img src={post.img_url} />
                </div>
                <h2>{post.title}</h2>
                <p>
                  por {post.author} em
                  {post.date
                    .split("/")
                    .reverse()
                    .join("/")}
                </p>
                <p>{post.comments ? post.comments : 0} comentários</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="dot-box">
          {this.state.posts.map(post => (
            <span
              key={post.index}
              className={`dot ${post.index === this.state.currentIndex &&
                "active"}`}
              onClick={() => this.GoToIndex(post.index)}
            ></span>
          ))}
        </div>
      </>
    );
  }
}

export default SlideShow;