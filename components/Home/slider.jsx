import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
    const sliders = [
        {
            src: "https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg",
            alt: "strawberries",
            caption: "Caption",
            text: "text",
        },
        {
            src: "https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg",
            alt: "strawberries",
            caption: "Caption",
            text: "text",
        },
        {
            src: "https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg",
            alt: "strawberries",
            caption: "Caption",
            text: "text",
        },
    ];
    return (
        <Carousel fade>
            {sliders.map((slider, index) => (
                <Carousel.Item key={index}>
                    <div className="w-100" style={{ height: "100vh" }}>
                        <Image
                            className="d-block w-100"
                            src={slider.src}
                            alt={slider.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>{slider.caption}</h3>
                        <p>{slider.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
