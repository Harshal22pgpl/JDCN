import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoticeCard from "./NoticeCard/NoticeCard";
import { getAllNews } from "../lib/services/news/news";
import { getAllNotice } from "../lib/services/notice/notice";

const Seminar = ({ eventData, carouselData, additionalCarouselData }) => {
  const listRef = useRef(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [newsData1, setNewsData1] = useState([]);
  const [newsData2, setNewsData2] = useState([]);
  const [noticeData, setNoticeData] = useState([]);

  const fetchNews = async () => {
    try {
      const newsDatas = await getAllNews();
      const half = Math.ceil(newsDatas.length / 2);
      const firstHalf = newsDatas.slice(0, half);
      const secondHalf = newsDatas.slice(half);
      setNewsData1(firstHalf);
      setNewsData2(secondHalf);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const fetchNotice = async () => {
    try {
      const noticeDatas = await getAllNotice();
      const noticeItemsWithType = noticeDatas.map((notice) => ({
        ...notice,
        type: "notice",
      }));
      setNoticeData(noticeItemsWithType);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchNotice();
  }, []);

  useEffect(() => {
    const listElement = listRef.current;
    const autoScroll = () => {
      listElement.scrollTop += 1;
      if (
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight - 1
      ) {
        listElement.scrollTop = 0; // Reset to the top
      }
    };
    let scrollInterval = setInterval(autoScroll, 50);
    listElement.addEventListener("mouseover", () => {
      clearInterval(scrollInterval);
    });
    listElement.addEventListener("mouseout", () => {
      scrollInterval = setInterval(autoScroll, 50);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  const handleCarouselScroll = (currentIndex) => {
    if (slider1 && slider2) {
      slider2.slickGoTo(currentIndex);
      slider1.slickGoTo(currentIndex);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    afterChange: handleCarouselScroll,
  };

  return (
    <>
  
      <div className="grid grid-cols-1 lg:flex gap-4 h-full w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2">
        <div className="w-full border border-gray-200 rounded-md">
          {/* <h2 className="text-2xl font-bold text-black text-center">Notices</h2> */}
          <ul
            ref={listRef}
            className="grid grid-cols-1 gap-2 max-h-[600px] overflow-scroll"
          >
            {noticeData.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className="lg:w-[390px] flex justify-center items-center">
          <div className="w-full h-auto">
            <Slider
              {...settings}
              asNavFor={slider2}
              ref={(slider) => setSlider1(slider)}
            >
              {newsData1.map((item) => (
                <NoticeCard
                  key={item.uuid}
                  title={item.title}
                  description={item.description}
                  id={item.uuid}
                  img={item.imageUrl}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="lg:w-[390px] flex justify-center items-center">
          <div className="w-full h-auto">
            <Slider
              {...settings}
              asNavFor={slider1}
              ref={(slider) => setSlider2(slider)}
            >
              {newsData2.map((item) => (
                <NoticeCard
                  key={item.uuid}
                  img={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  id={item.uuid}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const ListItem = ({ item }) => {
  const { title, endDate, uuid } = item;


  const formattedEndDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(endDate));
  return (
    <li className="border-gray-400 flex flex-col">
      <Link href={`/events/${uuid}`}>
        <div className="w-full flex gap-2 px-2">
          <div className="w-full justify-center p-2 items-start flex flex-col">
            <h1 className="text-sm font-bold text-black hover:text-gray-600">
              {title}
            </h1>
            <div className="flex justify-start py-4 items-center text-sm font-semibold">
              <h1 className="px-2 p-1 font-semibold rounded-lg capitalize bg-purple-200">
                {formattedEndDate}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Seminar;
