import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/customSupabaseClient";
import { toast } from "@/components/ui/use-toast";
import JsonLd from "@/components/JsonLd";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        toast({
          title: "Error fetching posts",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://www.patriotpest.pro/blog",
    name: "Pest Control Blog - Patriot Pest Control Co",
    description:
      "Expert pest control tips, prevention strategies, and industry insights from Patriot Pest Control Co.",
    publisher: {
      "@type": "Organization",
      name: "Patriot Pest Control Co",
      logo: {
        "@type": "ImageObject",
        url: "https://www.patriotpest.pro/logo.png",
      },
    },
  };

  const handleSubscribe = () => {
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Pest Control Blog - Tips & Insights | Patriot Pest Control Co</title>
        <meta
          name="description"
          content="Expert pest control tips, prevention strategies, and industry insights from Patriot Pest Control Co. Stay informed about pest management and home protection."
        />
        <meta
          name="keywords"
          content="pest control blog, pest prevention tips, termite prevention, rodent control, eco-friendly pest control"
        />
      </Helmet>
      <JsonLd schema={blogPageSchema} />

      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pest Control Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert tips, prevention strategies, and industry insights to help you maintain a
              pest-free environment.
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {loading ? (
        <div className="text-center py-16">Loading posts...</div>
      ) : (
        <>
          {featuredPost && (
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Post</h2>
                  <div className="blog-card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {featuredPost.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                        <Link to={`/blog/${featuredPost.slug}`}>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                      <div className="h-64 lg:h-auto">
                        <img
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                          src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Posts</h2>
                <p className="text-gray-600">
                  Stay updated with the latest pest control tips and insights
                </p>
              </motion.div>

              {regularPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="blog-card bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="h-48">
                        <img
                          alt={post.title}
                          className="w-full h-full object-cover"
                          src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="outline" size="sm">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No blog posts found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Build Your Pest-Proof Knowledge</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive tips, seasonal advice, and special offers
              delivered right to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <Button
                onClick={handleSubscribe}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
