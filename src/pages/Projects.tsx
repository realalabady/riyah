import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Building2, Home, Factory, Heart } from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", icon: null },
    { key: "commercial", icon: Building2 },
    { key: "residential", icon: Home },
    { key: "industrial", icon: Factory },
    { key: "healthcare", icon: Heart },
  ];

  const projects = [
    {
      key: "project1",
      category: "commercial",
      image: "bg-gradient-to-br from-primary/20 to-accent/20",
    },
    {
      key: "project2",
      category: "healthcare",
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
    },
    {
      key: "project3",
      category: "residential",
      image: "bg-gradient-to-br from-primary/30 to-secondary",
    },
    {
      key: "project4",
      category: "industrial",
      image: "bg-gradient-to-br from-secondary to-primary/20",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("projects.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("projects.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("projects.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {t(`projects.categories.${category.key}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.key} delay={index * 0.1}>
                <div className="card-elevated overflow-hidden group">
                  <div className={`h-64 ${project.image} relative`}>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        {t(`projects.items.${project.key}.category`)}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {t(`projects.items.${project.key}.location`)}
                      </span>
                    </div>
                    <h3 className="heading-subsection text-foreground mb-2">
                      {t(`projects.items.${project.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`projects.items.${project.key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
