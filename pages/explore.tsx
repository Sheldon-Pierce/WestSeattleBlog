import { useRouter } from "next/router";
import Navbar from "./navbar";

const Explore: React.FC = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/')
    };
    return (
        <>
            <Navbar />
            <div className="text-4xl">
                <p>Test</p>
                <p>Click me</p>
                <button onClick={handleHomeClick}>Click me</button>
            </div>
            <style jsx>
                {
                    `
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                    `
                }
            </style>
        </>
    )
}

export default Explore;