import {useState} from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";
// importing our custom hook to fetch data
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = ()=>{
    const [endpoint, setEndpoint] = useState("day");

    const {data, loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange= (tab)=>{
        setEndpoint(tab === "Day"? "day": "week");
    }
    return(
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending;