import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import { Container, Content } from "./styles";
import ReactPlayer from "react-player";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function FlipBook() {
  const book = useRef();

  const width = 900;
  const height = 500;
 
  return (
    <Container>
      <Content>
        <div className="opacy">
          <button
            // @ts-ignore: Unreachable code error
            onClick={() => book.current.pageFlip().flipNext()}
            className={"next-button"}
          >
            <FiArrowLeft size={24} />
          </button>
          {/*// @ts-ignore: Unreachable code error*/}
          <HTMLFlipBook
            width={width}
            height={height}
            ref={book}
            renderOnlyPageLengthChange={true}
            useMouseEvents={false}
          >
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video1.mp4"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video2.mp4"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video3.mp4"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video4.mp4"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video5.mp4"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url={"./assets/video/video6.mp4"}
              />
            </div>
          </HTMLFlipBook>
          <button
            // @ts-ignore: Unreachable code error
            onClick={() => book.current.pageFlip().flipPrev()}
            className={"previous-button"}
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </Content>
    </Container>
  );
}
