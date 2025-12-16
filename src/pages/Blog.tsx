import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

const Blog = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const posts = ["post1", "post2", "post3"];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("blog.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("blog.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("blog.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post} delay={index * 0.1}>
                <article className="card-elevated overflow-hidden group h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        {t(`blog.posts.${post}.category`)}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Calendar className="h-3.5 w-3.5" />
                        {t(`blog.posts.${post}.date`)}
                      </span>
                    </div>
                    <h3 className="heading-subsection text-foreground mb-3 line-clamp-2">
                      {t(`blog.posts.${post}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">
                      {t(`blog.posts.${post}.excerpt`)}
                    </p>
                    <button className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {t("blog.readMore")}
                      <Arrow className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
