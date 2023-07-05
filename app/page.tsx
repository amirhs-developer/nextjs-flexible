import { categoryFilters } from "@/constants";
import { randomFill } from "crypto";
import Link from "next/link";

const Home = () => {
    return (
        <section className='flex-start flex-col paddings mb-16'>
            <h1>Categories</h1>
            <h1>Posts</h1>
            <h2>LoadMore</h2>
            <div className="flex mt-10 gap-5">
                {categoryFilters.map((category) => (
                    <Link href='/' key={category}>
                        {category}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Home;


