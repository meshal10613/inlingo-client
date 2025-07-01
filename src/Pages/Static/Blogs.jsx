import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "5 Proven Techniques to Learn a Language Faster",
        summary: "Discover powerful methods that help language learners improve their fluency efficiently — from immersion to daily microlearning.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        author: "Anna de Vries",
        date: "June 25, 2025"
    },
    {
        id: 2,
        title: "Why Speaking is the Key to Fluency",
        summary: "Many learners focus on grammar, but speaking regularly can unlock true language mastery. Learn how to build speaking habits.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        author: "Carlos Jansen",
        date: "June 15, 2025"
    },
    {
        id: 3,
        title: "How Inlingo Tutors Personalize Your Lessons",
        summary: "See how Inlingo’s certified tutors adapt to your learning style and goals to make each session effective and engaging.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        author: "Lina Hofman",
        date: "June 10, 2025"
    },
];

const Blogs = () => {
    return (
        <section className="py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                Latest from the Inlingo Blog
                </h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map(post => (
                    <div key={post.id} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{post.summary}</p>
                        <div className="text-sm text-gray-400">
                        By <span className="text-gray-700 font-medium">{post.author}</span> • {post.date}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;