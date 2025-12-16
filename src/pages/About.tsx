import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { Target, Eye, Award, Shield, Users, Lightbulb } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const values = [
    { icon: Award, key: "quality" },
    { icon: Shield, key: "reliability" },
    { icon: Users, key: "expertise" },
    { icon: Lightbulb, key: "innovation" },
  ];

  const stats = [
    { value: t("about.stats.projects"), label: t("about.stats.projectsLabel") },
    { value: t("about.stats.clients"), label: t("about.stats.clientsLabel") },
    { value: t("about.stats.years"), label: t("about.stats.yearsLabel") },
    { value: t("about.stats.team"), label: t("about.stats.teamLabel") },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("about.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("about.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("about.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent/10 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="card-elevated p-8 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-subsection text-foreground mb-4">
                  {t("about.mission.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.mission.text")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="card-elevated p-8 h-full">
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="heading-subsection text-foreground mb-4">
                  {t("about.vision.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.vision.text")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeader
              title={t("about.values.title")}
              description={
                isArabic
                  ? "المبادئ التي توجه عملنا وعلاقاتنا مع العملاء"
                  : "The principles that guide our work and client relationships"
              }
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.key} delay={index * 0.1}>
                <div className="bg-card rounded-lg p-6 text-center border border-border/50">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {t(`about.values.${value.key}`)}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {t(`about.values.${value.key}Text`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h2 className="heading-section mb-6">
                {isArabic
                  ? "جزء من منظومة هندسية متكاملة"
                  : "Part of an Integrated Engineering System"}
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-3xl">
                {isArabic
                  ? "نعمل ضمن منظومة شركة عيسى بن عيد الهجله للاستشارات الهندسية، مما يمنحنا خبرة هندسية عميقة وقدرة على تنفيذ المشاريع الكبرى بأعلى معايير الجودة."
                  : "We operate within Isa Bin Aid Al-Hajlah Engineering Consulting Company, which gives us deep engineering expertise and the capability to execute major projects with the highest quality standards."}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    text: isArabic
                      ? "خبرة هندسية عميقة"
                      : "Deep Engineering Expertise",
                  },
                  {
                    icon: Award,
                    text: isArabic
                      ? "معايير جودة عالمية"
                      : "Global Quality Standards",
                  },
                  {
                    icon: Users,
                    text: isArabic
                      ? "فريق فني متخصص"
                      : "Specialized Technical Team",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-accent shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
