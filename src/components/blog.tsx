import Image from 'next/image';
import Link from 'next/link';
import { Icon } from './ui/icons';
import { type Blogs } from '../../types';
const BlogItem = ({ 
    title, 
    cover, 
    slug, 
    createdAt, 
    user, 
    content,
    category,
    tags  
    }: Blogs) => {
        return ( 
            <div className="w-[350px] bg-white rounded overflow-hidden shadow-lg pb-5">
                <div className="relative cursor-pointer group h-[230px]">
                    <Link href={slug}>
                        <Image
                            className="grayscale transition ease-in group-hover:-translate-y-10 group-hover:scale-150 duration-1000"
                            src={cover}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </Link>
                    <div className="absolute h-full inset-0 flex items-end justify-end">
                        <h2 className="text-center bg-primary px-2 py-1 text-white text-sm font-bold">{createdAt}</h2>
                    </div>
                </div>

                <div className="px-3 py-4 flex flex-col space-y-3">
                    <Link href={slug}>
                        <div className="flex font-bold mb-2 space-x-1">
                            <Icon name="avatar" className="text-primary hover:text-primary" />
                            <span className="uppercase text-sm text-gray-500 hover:text-primary">{user}</span>
                        </div>
                    </Link>
                    <Link href={slug} className="block">
                        <p className="text-gray-900 font-bold uppercase hover:text-primary">
                            {title}
                        </p>
                    </Link>
                </div>
                <Link href={slug} className="block">
                    <div className="flex space-x-2 px-3 text-gray-600 group hover:text-primary">
                        <span className="inline-block text-sm">Voir plus</span>
                        <Icon name="arrow-right" className="transition group-hover:translate-x-1 duration-500 delay-150" />
                    </div>
                </Link>
            </div>
    )
}

export default BlogItem;