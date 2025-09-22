import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Settings, FileText, BarChart3, LogOut, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/customSupabaseClient";
import { useLanguage } from "@/contexts/LanguageContext";

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [currentEditingData, setCurrentEditingData] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "Admin",
    category: "General",
    featured: false,
  });

  const { language } = useLanguage();

  const adminDashboardPageData = {
    en: {
      helmetTitle: "Admin Dashboard - Patriot Pest Control Co",
      helmetDescription: "Admin dashboard for managing Patriot Pest Control Co website content.",
      dashboardTitle: "Admin Dashboard",
      logout: "Logout",
      overview: "Overview",
      blogManagement: "Blog Management",
      siteSettings: "Site Settings",
      totalBlogPosts: "Total Blog Posts",
      siteStatus: "Site Status",
      online: "Online",
      adminUser: "Admin User",
      quickActions: "Quick Actions",
      manageBlog: "Manage Blog",
      createNewPost: "Create New Post",
      title: "Title",
      excerpt: "Excerpt",
      content: "Content",
      category: "Category",
      featuredPost: "Featured Post",
      createPost: "Create Post",
      save: "Save",
      cancel: "Cancel",
      featureNotImplemented: "Feature Not Implemented",
      featureNotImplementedMessage:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      errorFetchingPosts: "Error fetching posts",
      errorCreatingPost: "Error creating post",
      fillAllFields: "Please fill in all required fields.",
      postCreated: "Post Created",
      postCreatedMessage: "Blog post has been successfully created.",
      errorUpdatingPost: "Error updating post",
      postUpdated: "Post Updated",
      postUpdatedMessage: "Blog post has been successfully updated.",
      errorDeletingPost: "Error deleting post",
      postDeleted: "Post Deleted",
      postDeletedMessage: "Blog post has been successfully deleted.",
      loggedOut: "Logged Out",
      loggedOutMessage: "You have been successfully logged out.",
    },
    es: {
      helmetTitle: "Panel de Administración - Patriot Pest Control Co",
      helmetDescription:
        "Panel de administración para gestionar el contenido del sitio web de Patriot Pest Control Co.",
      dashboardTitle: "Panel de Administración",
      logout: "Cerrar Sesión",
      overview: "Resumen",
      blogManagement: "Gestión de Blog",
      siteSettings: "Configuración del Sitio",
      totalBlogPosts: "Total de Publicaciones",
      siteStatus: "Estado del Sitio",
      online: "En Línea",
      adminUser: "Usuario Administrador",
      quickActions: "Acciones Rápidas",
      manageBlog: "Gestionar Blog",
      createNewPost: "Crear Nueva Publicación",
      title: "Título",
      excerpt: "Extracto",
      content: "Contenido",
      category: "Categoría",
      featuredPost: "Publicación Destacada",
      createPost: "Crear Publicación",
      save: "Guardar",
      cancel: "Cancelar",
      featureNotImplemented: "Característica No Implementada",
      featureNotImplementedMessage:
        "🚧 Esta característica aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próxima indicación! 🚀",
      errorFetchingPosts: "Error al obtener publicaciones",
      errorCreatingPost: "Error al crear publicación",
      fillAllFields: "Por favor, complete todos los campos requeridos.",
      postCreated: "Publicación Creada",
      postCreatedMessage: "La publicación del blog ha sido creada exitosamente.",
      errorUpdatingPost: "Error al actualizar publicación",
      postUpdated: "Publicación Actualizada",
      postUpdatedMessage: "La publicación del blog ha sido actualizada exitosamente.",
      errorDeletingPost: "Error al eliminar publicación",
      postDeleted: "Publicación Eliminada",
      postDeletedMessage: "La publicación del blog ha sido eliminada exitosamente.",
      loggedOut: "Sesión Cerrada",
      loggedOutMessage: "Has cerrado sesión exitosamente.",
    },
    fr: {
      helmetTitle: "Tableau de Bord Admin - Patriot Pest Control Co",
      helmetDescription:
        "Tableau de bord administrateur pour la gestion du contenu du site web de Patriot Pest Control Co.",
      dashboardTitle: "Tableau de Bord Admin",
      logout: "Déconnexion",
      overview: "Aperçu",
      blogManagement: "Gestion du Blog",
      siteSettings: "Paramètres du Site",
      totalBlogPosts: "Total des Articles",
      siteStatus: "Statut du Site",
      online: "En Ligne",
      adminUser: "Utilisateur Admin",
      quickActions: "Actions Rapides",
      manageBlog: "Gérer le Blog",
      createNewPost: "Créer un Nouvel Article",
      title: "Titre",
      excerpt: "Extrait",
      content: "Contenu",
      category: "Catégorie",
      featuredPost: "Article en Vedette",
      createPost: "Créer l'Article",
      save: "Enregistrer",
      cancel: "Annuler",
      featureNotImplemented: "Fonctionnalité Non Implémentée",
      featureNotImplementedMessage:
        "🚧 Cette fonctionnalité n'est pas encore implémentée — mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀",
      errorFetchingPosts: "Erreur lors de la récupération des articles",
      errorCreatingPost: "Erreur lors de la création de l'article",
      fillAllFields: "Veuillez remplir tous les champs requis.",
      postCreated: "Article Créé",
      postCreatedMessage: "L'article de blog a été créé avec succès.",
      errorUpdatingPost: "Erreur lors de la mise à jour de l'article",
      postUpdated: "Article Mis à Jour",
      postUpdatedMessage: "L'article de blog a été mis à jour avec succès.",
      errorDeletingPost: "Erreur lors de la suppression de l'article",
      postDeleted: "Article Supprimé",
      postDeletedMessage: "L'article de blog a été supprimé avec succès.",
      loggedOut: "Déconnecté",
      loggedOutMessage: "Vous avez été déconnecté avec succès.",
    },
    de: {
      helmetTitle: "Admin-Dashboard - Patriot Pest Control Co",
      helmetDescription:
        "Admin-Dashboard zur Verwaltung des Inhalts der Patriot Pest Control Co Website.",
      dashboardTitle: "Admin-Dashboard",
      logout: "Abmelden",
      overview: "Übersicht",
      blogManagement: "Blog-Verwaltung",
      siteSettings: "Website-Einstellungen",
      totalBlogPosts: "Gesamtzahl der Blogbeiträge",
      siteStatus: "Website-Status",
      online: "Online",
      adminUser: "Admin-Benutzer",
      quickActions: "Schnellaktionen",
      manageBlog: "Blog verwalten",
      createNewPost: "Neuen Beitrag erstellen",
      title: "Titel",
      excerpt: "Auszug",
      content: "Inhalt",
      category: "Kategorie",
      featuredPost: "Vorgestellter Beitrag",
      createPost: "Beitrag erstellen",
      save: "Speichern",
      cancel: "Abbrechen",
      featureNotImplemented: "Funktion nicht implementiert",
      featureNotImplementedMessage:
        "🚧 Diese Funktion ist noch nicht implementiert – aber keine Sorge! Sie können sie in Ihrer nächsten Aufforderung anfordern! 🚀",
      errorFetchingPosts: "Fehler beim Abrufen von Beiträgen",
      errorCreatingPost: "Fehler beim Erstellen des Beitrags",
      fillAllFields: "Bitte füllen Sie alle erforderlichen Felder aus.",
      postCreated: "Beitrag erstellt",
      postCreatedMessage: "Der Blogbeitrag wurde erfolgreich erstellt.",
      errorUpdatingPost: "Fehler beim Aktualisieren des Beitrags",
      postUpdated: "Beitrag aktualisiert",
      postUpdatedMessage: "Der Blogbeitrag wurde erfolgreich aktualisiert.",
      errorDeletingPost: "Fehler beim Löschen des Beitrags",
      postDeleted: "Beitrag gelöscht",
      postDeletedMessage: "Der Blogbeitrag wurde erfolgreich gelöscht.",
      loggedOut: "Abgemeldet",
      loggedOutMessage: "Sie wurden erfolgreich abgemeldet.",
    },
    zh: {
      helmetTitle: "管理仪表板 - Patriot Pest Control Co",
      helmetDescription: "用于管理Patriot Pest Control Co网站内容的管理仪表板。",
      dashboardTitle: "管理仪表板",
      logout: "登出",
      overview: "概览",
      blogManagement: "博客管理",
      siteSettings: "网站设置",
      totalBlogPosts: "博客文章总数",
      siteStatus: "网站状态",
      online: "在线",
      adminUser: "管理员用户",
      quickActions: "快速操作",
      manageBlog: "管理博客",
      createNewPost: "创建新文章",
      title: "标题",
      excerpt: "摘要",
      content: "内容",
      category: "类别",
      featuredPost: "特色文章",
      createPost: "创建文章",
      save: "保存",
      cancel: "取消",
      featureNotImplemented: "功能未实现",
      featureNotImplementedMessage: "🚧 此功能尚未实现——但别担心！您可以在下一个提示中请求它！🚀",
      errorFetchingPosts: "获取文章错误",
      errorCreatingPost: "创建文章错误",
      fillAllFields: "请填写所有必填字段。",
      postCreated: "文章已创建",
      postCreatedMessage: "博客文章已成功创建。",
      errorUpdatingPost: "更新文章错误",
      postUpdated: "文章已更新",
      postUpdatedMessage: "博客文章已成功更新。",
      errorDeletingPost: "删除文章错误",
      postDeleted: "文章已删除",
      postDeletedMessage: "博客文章已成功删除。",
      loggedOut: "已登出",
      loggedOutMessage: "您已成功登出。",
    },
  };

  const t = adminDashboardPageData[language] || adminDashboardPageData.en;

  const fetchBlogPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      toast({ title: t.errorFetchingPosts, description: error.message, variant: "destructive" });
    } else {
      setBlogPosts(data);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const handleLogout = async () => {
    await signOut();
    toast({
      title: t.loggedOut,
      description: t.loggedOutMessage,
    });
    navigate("/");
  };

  const handleCreatePost = async () => {
    if (!newPost.title || !newPost.excerpt || !newPost.content) {
      toast({
        title: "Error",
        description: t.fillAllFields,
        variant: "destructive",
      });
      return;
    }

    const post = {
      ...newPost,
      date: new Date().toISOString().split("T")[0],
      slug: newPost.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    };

    const { error } = await supabase.from("blog_posts").insert([post]);

    if (error) {
      toast({ title: t.errorCreatingPost, description: error.message, variant: "destructive" });
    } else {
      toast({ title: t.postCreated, description: t.postCreatedMessage });
      setNewPost({
        title: "",
        excerpt: "",
        content: "",
        author: "Admin",
        category: "General",
        featured: false,
      });
      fetchBlogPosts();
    }
  };

  const handleUpdatePost = async (postId) => {
    const { error } = await supabase.from("blog_posts").update(currentEditingData).eq("id", postId);

    if (error) {
      toast({ title: t.errorUpdatingPost, description: error.message, variant: "destructive" });
    } else {
      toast({ title: t.postUpdated, description: t.postUpdatedMessage });
      setEditingPost(null);
      setCurrentEditingData(null);
      fetchBlogPosts();
    }
  };

  const handleDeletePost = async (postId) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", postId);

    if (error) {
      toast({ title: t.errorDeletingPost, description: error.message, variant: "destructive" });
    } else {
      toast({ title: t.postDeleted, description: t.postDeletedMessage });
      fetchBlogPosts();
    }
  };

  const startEditing = (post) => {
    setEditingPost(post.id);
    setCurrentEditingData(post);
  };

  const cancelEditing = () => {
    setEditingPost(null);
    setCurrentEditingData(null);
  };

  const handleEditingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentEditingData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const tabs = [
    { id: "overview", name: t.overview, icon: BarChart3 },
    { id: "blog", name: t.blogManagement, icon: FileText },
    { id: "settings", name: t.siteSettings, icon: Settings },
  ];

  return (
    <>
      <Helmet>
        <title>{t.helmetTitle}</title>
        <meta name="description" content={t.helmetDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-gray-900">{t.dashboardTitle}</h1>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                {t.logout}
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.overview}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {t.totalBlogPosts}
                        </h3>
                        <p className="text-3xl font-bold text-blue-600">{blogPosts.length}</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.siteStatus}</h3>
                        <p className="text-3xl font-bold text-green-600">{t.online}</p>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.adminUser}</h3>
                        <p className="text-xl font-bold text-yellow-600 truncate">{user?.email}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.quickActions}</h3>
                      <div className="flex gap-4">
                        <Button onClick={() => setActiveTab("blog")}>{t.manageBlog}</Button>
                        <Button onClick={() => setActiveTab("settings")} variant="outline">
                          {t.siteSettings}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "blog" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.blogManagement}</h2>

                    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t.createNewPost}
                      </h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder={t.title}
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                        <input
                          type="text"
                          placeholder={t.excerpt}
                          value={newPost.excerpt}
                          onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                        <textarea
                          placeholder={t.content}
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                          className="w-full p-2 border rounded"
                          rows="4"
                        ></textarea>
                        <input
                          type="text"
                          placeholder={t.category}
                          value={newPost.category}
                          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="featured"
                            checked={newPost.featured}
                            onChange={(e) => setNewPost({ ...newPost, featured: e.target.checked })}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                          <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                            {t.featuredPost}
                          </label>
                        </div>
                        <Button onClick={handleCreatePost}>
                          <Plus className="h-4 w-4 mr-2" />
                          {t.createPost}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {blogPosts.map((post) => (
                        <div key={post.id} className="p-4 border rounded-lg">
                          {editingPost === post.id ? (
                            <div className="space-y-4">
                              <input
                                type="text"
                                name="title"
                                value={currentEditingData.title}
                                onChange={handleEditingChange}
                                className="w-full p-2 border rounded"
                              />
                              <input
                                type="text"
                                name="excerpt"
                                value={currentEditingData.excerpt}
                                onChange={handleEditingChange}
                                className="w-full p-2 border rounded"
                              />
                              <textarea
                                name="content"
                                value={currentEditingData.content}
                                onChange={handleEditingChange}
                                className="w-full p-2 border rounded"
                                rows="4"
                              ></textarea>
                              <input
                                type="text"
                                name="category"
                                value={currentEditingData.category}
                                onChange={handleEditingChange}
                                className="w-full p-2 border rounded"
                              />
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="featured"
                                  checked={currentEditingData.featured}
                                  onChange={handleEditingChange}
                                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-900">
                                  {t.featuredPost}
                                </label>
                              </div>
                              <div className="flex gap-4">
                                <Button onClick={() => handleUpdatePost(post.id)} size="sm">
                                  <Save className="h-4 w-4 mr-2" />
                                  {t.save}
                                </Button>
                                <Button onClick={cancelEditing} variant="outline" size="sm">
                                  <X className="h-4 w-4 mr-2" />
                                  {t.cancel}
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold">{post.title}</h4>
                                <p className="text-sm text-gray-500">
                                  {post.category} - {new Date(post.date).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => startEditing(post)}
                                  variant="outline"
                                  size="sm"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  onClick={() => handleDeletePost(post.id)}
                                  variant="destructive"
                                  size="sm"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.siteSettings}</h2>
                    <div
                      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg"
                      role="alert"
                    >
                      <p className="font-bold">{t.featureNotImplemented}</p>
                      <p>{t.featureNotImplementedMessage}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
