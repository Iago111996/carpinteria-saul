import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { Container, Content } from "./styles";
import ReactPlayer from "react-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FlipBook() {
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(500);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const book = useRef();

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore: Unreachable code error
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);
  // @ts-ignore: Unreachable code error
  const updatePage = ({ data }) => setPage(data + 2);

  return (
    <Container>
      <Content>
        <div className="opacy">
          <button
            // @ts-ignore: Unreachable code error
            onClick={() => book.current.pageFlip().flipNext()}
            className={"next-button"}
          >
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </button>
          {/*// @ts-ignore: Unreachable code error*/}
          <HTMLFlipBook
            onFlip={updatePage}
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
                url={"https://v16-webapp.tiktok.com/158d8f493e0c16c4ec4520ee916e00f0/6300413c/video/tos/useast2a/tos-useast2a-pve-0068/d80aa7c9a816480da580c098e74a7e13/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=480&bt=240&cs=0&ds=3&ft=gKSYZ8fPo0PD1rLGAsg9wtzE75LiaQ2D~u8&mime_type=video_mp4&qs=0&rc=PDRoNWY4Mzs4Z2Y4NmhnOUBpMzx3ZmY1cHJkMzMzOTczM0BiM18wYl4tXzAxYl8vMl8yYSNtLmwxYzFjM19gLS00MTZzcw%3D%3D&l=202208192004350102170290470A4C9149&btag=80000"}
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url="https://v16-webapp.tiktok.com/158d8f493e0c16c4ec4520ee916e00f0/6300413c/video/tos/useast2a/tos-useast2a-pve-0068/d80aa7c9a816480da580c098e74a7e13/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=480&bt=240&cs=0&ds=3&ft=gKSYZ8fPo0PD1rLGAsg9wtzE75LiaQ2D~u8&mime_type=video_mp4&qs=0&rc=PDRoNWY4Mzs4Z2Y4NmhnOUBpMzx3ZmY1cHJkMzMzOTczM0BiM18wYl4tXzAxYl8vMl8yYSNtLmwxYzFjM19gLS00MTZzcw%3D%3D&l=202208192004350102170290470A4C9149&btag=80000"
              />
            </div>
            <div className="page">
              <ReactPlayer
                controls
                volume={0.1}
                width={width}
                height={height}
                url="https://v16-webapp.tiktok.com/158d8f493e0c16c4ec4520ee916e00f0/6300413c/video/tos/useast2a/tos-useast2a-pve-0068/d80aa7c9a816480da580c098e74a7e13/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=480&bt=240&cs=0&ds=3&ft=gKSYZ8fPo0PD1rLGAsg9wtzE75LiaQ2D~u8&mime_type=video_mp4&qs=0&rc=PDRoNWY4Mzs4Z2Y4NmhnOUBpMzx3ZmY1cHJkMzMzOTczM0BiM18wYl4tXzAxYl8vMl8yYSNtLmwxYzFjM19gLS00MTZzcw%3D%3D&l=202208192004350102170290470A4C9149&btag=80000"
              />
            </div>
          </HTMLFlipBook>
          <button
            // @ts-ignore: Unreachable code error
            onClick={() => book.current.pageFlip().flipPrev()}
            className={"previous-button"}
          >
            <FontAwesomeIcon size="lg" icon={faArrowRight} />
          </button>
        </div>
      </Content>
    </Container>
  );
}
