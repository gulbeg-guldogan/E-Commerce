import { FaAws, FaHooli, FaLyft, FaRedditAlien, FaStripe, FaTwitch} from "react-icons/fa";

export default function Brands() {
    return(
        <p className="flex flex-row gap-20 justify-center mt-5">
            <FaHooli className="text-9xl"/>
            <FaLyft className="text-9xl"/>
            <FaTwitch className="text-9xl"/>
            <FaStripe className="text-9xl"/>
            <FaAws className="text-9xl"/>
            <FaRedditAlien className="text-9xl"/>
        </p>

    );
}