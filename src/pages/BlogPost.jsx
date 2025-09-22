import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/customSupabaseClient";
import { toast } from "@/components/ui/use-toast";
import JsonLd from "@/components/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../contexts/LanguageContext";

const BlogPost = () => {
  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  const blogPostPageData = {
    en: {
      loadingMessage: "Loading post...",
      postNotFound: {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
        backToBlog: "Back to Blog",
      },
      share: "Share:",
      authorBox: {
        aboutAuthor: "About the Author:",
        description: (author) =>
          `As a certified pest control expert at Patriot Pest Control Co, ${author} brings years of field experience and a commitment to providing safe, effective solutions for our community.`,
      },
      relatedPosts: {
        title: "Related Posts",
        moreArticles: (category) => `More articles about ${category.toLowerCase()}`,
        readMore: "Read More",
      },
      cta: {
        title: "Ready to Protect Your Property?",
        description:
          "Don't wait for pest problems to get worse. Contact our experts today for professional pest control solutions.",
        getFreeQuote: "Get Free Quote",
        callUs: "Call (509) 471-5767",
      },
      faqSectionTitle: "Frequently Asked Questions",
    },
    es: {
      loadingMessage: "Cargando publicación...",
      postNotFound: {
        title: "Publicación no Encontrada",
        description: "La publicación de blog solicitada no pudo ser encontrada.",
        backToBlog: "Volver al Blog",
      },
      share: "Compartir:",
      authorBox: {
        aboutAuthor: "Sobre el Autor:",
        description: (author) =>
          `Como experto certificado en control de plagas en Patriot Pest Control Co, ${author} aporta años de experiencia en el campo y un compromiso con la provisión de soluciones seguras y efectivas para nuestra comunidad.`,
      },
      relatedPosts: {
        title: "Publicaciones Relacionadas",
        moreArticles: (category) => `Más artículos sobre ${category.toLowerCase()}`,
        readMore: "Leer Más",
      },
      cta: {
        title: "¿Listo para Proteger tu Propiedad?",
        description:
          "No esperes a que los problemas de plagas empeoren. Contacta a nuestros expertos hoy para soluciones profesionales de control de plagas.",
        getFreeQuote: "Obtener Presupuesto Gratis",
        callUs: "Llamar (509) 471-5767",
      },
      faqSectionTitle: "Preguntas Frecuentes",
    },
    fr: {
      loadingMessage: "Chargement de l'article...",
      postNotFound: {
        title: "Article non Trouvé",
        description: "L'article de blog demandé n'a pas pu être trouvé.",
        backToBlog: "Retour au Blog",
      },
      share: "Partager:",
      authorBox: {
        aboutAuthor: "À propos de l'auteur:",
        description: (author) =>
          `En tant qu'expert certifié en contrôle parasitaire chez Patriot Pest Control Co, ${author} apporte des années d'expérience sur le terrain et un engagement à fournir des solutions sûres et efficaces pour notre communauté.`,
      },
      relatedPosts: {
        title: "Articles Similaires",
        moreArticles: (category) => `Plus d'articles sur ${category.toLowerCase()}`,
        readMore: "Lire la suite",
      },
      cta: {
        title: "Prêt à Protéger Votre Propriété ?",
        description:
          "N'attendez pas que les problèmes de parasites s'aggravent. Contactez nos experts dès aujourd'hui pour des solutions professionnelles de contrôle parasitaire.",
        getFreeQuote: "Obtenir un Devis Gratuit",
        callUs: "Appeler (509) 471-5767",
      },
      faqSectionTitle: "Questions Fréquemment Posées",
    },
    de: {
      loadingMessage: "Beitrag wird geladen...",
      postNotFound: {
        title: "Beitrag nicht gefunden",
        description: "Der angeforderte Blog-Beitrag konnte nicht gefunden werden.",
        backToBlog: "Zurück zum Blog",
      },
      share: "Teilen:",
      authorBox: {
        aboutAuthor: "Über den Autor:",
        description: (author) =>
          `Als zertifizierter Schädlingsbekämpfungsexperte bei Patriot Pest Control Co bringt ${author} jahrelange Felderfahrung und das Engagement mit, sichere und effektive Lösungen für unsere Gemeinschaft anzubieten.`,
      },
      relatedPosts: {
        title: "Ähnliche Beiträge",
        moreArticles: (category) => `Weitere Artikel über ${category.toLowerCase()}`,
        readMore: "Weiterlesen",
      },
      cta: {
        title: "Bereit, Ihr Eigentum zu schützen?",
        description:
          "Warten Sie nicht, bis sich Schädlingsprobleme verschlimmern. Kontaktieren Sie noch heute unsere Experten für professionelle Schädlingsbekämpfungslösungen.",
        getFreeQuote: "Kostenloses Angebot erhalten",
        callUs: "Anrufen (509) 471-5767",
      },
      faqSectionTitle: "Häufig gestellte Fragen",
    },
    zh: {
      loadingMessage: "正在加载文章...",
      postNotFound: {
        title: "文章未找到",
        description: "未找到请求的博客文章。",
        backToBlog: "返回博客",
      },
      share: "分享:",
      authorBox: {
        aboutAuthor: "关于作者:",
        description: (author) =>
          `作为Patriot Pest Control Co的认证害虫控制专家，${author}拥有多年的现场经验，并致力于为我们的社区提供安全、有效的解决方案。`,
      },
      relatedPosts: {
        title: "相关文章",
        moreArticles: (category) => `更多关于${category.toLowerCase()}的文章`,
        readMore: "阅读更多",
      },
      cta: {
        title: "准备好保护您的财产了吗？",
        description: "不要等到害虫问题恶化。立即联系我们的专家，获取专业的害虫控制解决方案。",
        getFreeQuote: "获取免费报价",
        callUs: "致电 (509) 471-5767",
      },
      faqSectionTitle: "常见问题",
    },
  };

  const pageData = blogPostPageData[language] || blogPostPageData.en;

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const { data: postData, error: postError } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", postSlug)
        .single();

      if (postError || !postData) {
        toast({ title: "Error", description: "Post not found.", variant: "destructive" });
        setLoading(false);
        return;
      }

      setPost(postData);

      const { data: relatedData, error: relatedError } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("category", postData.category)
        .neq("id", postData.id)
        .limit(3);

      if (!relatedError) {
        setRelatedPosts(relatedData);
      }

      setLoading(false);
    };

    fetchPost();
  }, [postSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">{pageData.loadingMessage}</div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{pageData.postNotFound.title}</h1>
          <p className="text-gray-600 mb-4">{pageData.postNotFound.description}</p>
          <Link to="/blog">
            <Button>{pageData.postNotFound.backToBlog}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: "https://images.unsplash.com/photo-1681411825980-8c2d8dc46d78",
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Patriot Pest Control Co",
      logo: {
        "@type": "ImageObject",
        url: "https://www.patriotpest.pro/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.created_at,
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Helmet>
        <title>{post.title} - Patriot Pest Control Co Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.category}, pest control, ${post.title.toLowerCase()}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
      </Helmet>
      <JsonLd schema={blogPostSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {pageData.postNotFound.backToBlog}
            </Link>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm text-gray-500">{pageData.share}</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              alt={post.title}
              className="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </article>

      {/* FAQ Section */}
      {post.faq && post.faq.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{pageData.faqSectionTitle}</h2>
            <Accordion type="single" collapsible className="w-full">
              {post.faq.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      )}

      {/* Author Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg flex items-center space-x-6">
          <Award className="h-16 w-16 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {pageData.authorBox.aboutAuthor} {post.author}
            </h3>
            <p className="text-gray-600">{pageData.authorBox.description(post.author)}</p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {pageData.relatedPosts.title}
              </h2>
              <p className="text-gray-600">{pageData.relatedPosts.moreArticles(post.category)}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="blog-card bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        {pageData.relatedPosts.readMore}
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">{pageData.cta.title}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {pageData.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">{pageData.cta.getFreeQuote}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                {pageData.cta.callUs}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
