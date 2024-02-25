import React from "react";

interface PostsProps {
    title?: string;
    posts?: {
        img: string;
        description: string;
        id: number;
        date: string;
        nameImg: string;
    }[];
    className?: string;
}

export const Post: React.FC<PostsProps> = (props: PostsProps) => {
    const { posts, className, title } = props;

    return (
        <>
            {posts && (
                <section className={className}>
                    <div className={"container"}>
                        <h2 className={"text-xl font-semibold max-md:text-base max-md:text-center"}>
                            {title}
                        </h2>

                        <div className={'grid grid-cols-5 gap-1 justify-items-center items-start max-md:grid-cols-3 max-sm:grid-cols-1'}>
                            {posts.map(post => (
                                <div key={post.id} className={"flex flex-col items-center justify-center gap-2.5 max-w-60 max-md:w-full max-sm:max-w-full"}>
                                    <img src={post.img} alt={post.nameImg} />
                                    <p className={"text-xs font-normal text-center max-w-48 max-sm:text-sl"}>{post.description}</p>
                                    <p className={"text-xs font-normal text-grey mb-2.5"}>{post.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
