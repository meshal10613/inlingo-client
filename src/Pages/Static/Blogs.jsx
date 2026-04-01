import React from 'react';

const blogPosts = [
    {
        id: 1,
        tag: 'Learning Tips',
        title: '5 Proven Techniques to Learn a Language Faster',
        summary: 'Discover powerful methods that help language learners improve fluency efficiently — from immersion to daily microlearning habits.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
        author: 'Anna de Vries',
        date: 'June 25, 2025',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: 2,
        tag: 'Speaking',
        title: 'Why Speaking is the Key to Fluency',
        summary: 'Many learners focus on grammar, but speaking regularly unlocks true language mastery. Learn how to build speaking habits that stick.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop',
        author: 'Carlos Jansen',
        date: 'June 15, 2025',
        readTime: '4 min read',
        featured: false,
    },
    {
        id: 3,
        tag: 'Tutoring',
        title: 'How Inlingo Tutors Personalize Your Lessons',
        summary: 'See how our certified tutors adapt to your learning style and goals to make each session effective and engaging.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
        author: 'Lina Hofman',
        date: 'June 10, 2025',
        readTime: '3 min read',
        featured: false,
    },
];

const Blogs = () => {
    const [featured, ...rest] = blogPosts;

    return (
        <section className="my-12 md:my-20 max-w-7xl mx-auto container">

            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Inlingo Blog
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    Latest from the{' '}
                    <span className="text-[#7F3D27]">blog</span>
                </h2>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Tips, stories, and insights to help you on your language learning journey.
                </p>
            </div>

            {/* Featured post — wide card */}
            <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-base-100 border border-base-200 rounded-2xl overflow-hidden hover:border-[#7F3D27]/25 hover:shadow-lg transition-all duration-300 mb-6 cursor-pointer">
                <div className="overflow-hidden h-60 md:h-auto">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-7 md:p-10 flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-3">
                        <span className="badge bg-[#7F3D27]/10 text-[#7F3D27] border-0 font-medium text-xs px-3 py-2.5 rounded-lg">
                            {featured.tag}
                        </span>
                        <span className="badge badge-ghost text-base-content/40 text-xs px-3 py-2.5 rounded-lg">
                            ⭐ Featured
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-base-content group-hover:text-[#7F3D27] transition-colors duration-200 leading-snug">
                        {featured.title}
                    </h3>
                    <p className="text-base-content/60 text-sm md:text-base leading-relaxed">
                        {featured.summary}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-base-200">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#7F3D27]/15 flex items-center justify-center text-[#7F3D27] text-xs font-bold">
                                {featured.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-base-content leading-none">{featured.author}</p>
                                <p className="text-xs text-base-content/45 mt-0.5">{featured.date}</p>
                            </div>
                        </div>
                        <span className="text-xs text-base-content/40 font-medium">{featured.readTime}</span>
                    </div>
                </div>
            </div>

            {/* Rest of posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {rest.map((post) => (
                    <div
                        key={post.id}
                        className="group flex flex-col bg-base-100 border border-base-200 rounded-2xl overflow-hidden hover:border-[#7F3D27]/25 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        <div className="overflow-hidden h-52">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            <span className="badge bg-[#7F3D27]/10 text-[#7F3D27] border-0 font-medium text-xs px-3 py-2.5 rounded-lg w-fit">
                                {post.tag}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-base-content group-hover:text-[#7F3D27] transition-colors duration-200 leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-base-content/55 text-sm leading-relaxed flex-1">
                                {post.summary}
                            </p>
                            <div className="flex items-center justify-between pt-3 border-t border-base-200 mt-auto">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-full bg-[#7F3D27]/15 flex items-center justify-center text-[#7F3D27] text-xs font-bold">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-base-content leading-none">{post.author}</p>
                                        <p className="text-[11px] text-base-content/40 mt-0.5">{post.date}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-base-content/40 font-medium">{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;