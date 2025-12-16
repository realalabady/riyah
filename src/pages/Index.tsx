import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Star,
  Shield,
  Award,
  Users,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  Home as HomeIcon,
  Wrench,
  Lightbulb,
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  const stats = [
    { value: t("about.stats.projects"), label: t("about.stats.projectsLabel") },
    { value: t("about.stats.clients"), label: t("about.stats.clientsLabel") },
    { value: t("about.stats.years"), label: t("about.stats.yearsLabel") },
    { value: t("about.stats.team"), label: t("about.stats.teamLabel") },
  ];

  const services = [
    { icon: Building2, key: "centralAC" },
    { icon: Wrench, key: "installation" },
    { icon: Shield, key: "maintenance" },
    { icon: Lightbulb, key: "consulting" },
  ];

  const features = [
    { icon: Shield, text: isArabic ? "ضمان شامل" : "Comprehensive Warranty" },
    { icon: Award, text: isArabic ? "جودة معتمدة" : "Certified Quality" },
    { icon: Users, text: isArabic ? "فريق متخصص" : "Expert Team" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern w-full h-full" />
        </div>
        <div className="container-wide section-padding relative">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1 bg-accent/20 text-accent px-3 py-1.5 rounded-full">
                  <Star className="h-4 w-4 fill-accent" />
                  <span className="font-semibold">{t("hero.rating")}</span>
                </div>
                <span className="text-primary-foreground/70 text-sm">
                  ({t("hero.reviews")})
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="heading-display text-primary-foreground mb-6 text-balance">
                {t("hero.title")}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/quote"
                  className="btn-accent inline-flex items-center gap-2"
                >
                  {t("hero.cta")}
                  <Arrow className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline-light inline-flex items-center gap-2"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-primary-foreground/80"
                  >
                    <feature.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeader
              subtitle={isArabic ? "ماذا نقدم" : "What We Offer"}
              title={t("services.title")}
              description={t("services.description")}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.key} delay={index * 0.1}>
                <div className="card-elevated p-6 h-full group">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="heading-subsection text-foreground mb-3">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("services.cta")}
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                  {isArabic ? "لماذا نحن" : "Why Choose Us"}
                </p>
                <h2 className="heading-section text-foreground mb-6">
                  {isArabic
                    ? "خبرة هندسية موثوقة في قطاع التكييف"
                    : "Trusted Engineering Expertise in HVAC"}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("about.description")}
                </p>
                <ul className="space-y-4">
                  {[
                    isArabic
                      ? "فريق هندسي متخصص بخبرة تتجاوز 10 سنوات"
                      : "Specialized engineering team with 10+ years experience",
                    isArabic
                      ? "خدمات صيانة دورية لضمان استمرارية العمل"
                      : "Regular maintenance services for continuous operation",
                    isArabic
                      ? "حلول مخصصة تناسب كل مشروع"
                      : "Customized solutions for every project",
                    isArabic
                      ? "التزام بأعلى معايير الجودة والسلامة"
                      : "Commitment to highest quality and safety standards",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/about"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {t("common.learnMore")}
                    <Arrow className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">
                  {isArabic ? "تواصل معنا اليوم" : "Contact Us Today"}
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  {isArabic
                    ? "احصل على استشارة مجانية وعرض سعر مخصص لمشروعك"
                    : "Get a free consultation and custom quote for your project"}
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-5 w-5 text-accent" />
                    <span className="text-sm">{t("contact.address.text")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+966552238222"
                      className="flex items-center gap-3 hover:text-accent transition-colors"
                    >
                      <Wrench className="h-5 w-5 text-accent" />
                      <span className="text-lg font-semibold">
                        {t("contact.phone.number")}
                      </span>
                    </a>
                  </div>
                </div>
                <Link
                  to="/quote"
                  className="btn-accent w-full text-center block"
                >
                  {t("nav.quote")}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="heading-section text-accent-foreground mb-4">
              {isArabic ? "هل لديك مشروع تكييف؟" : "Have an HVAC Project?"}
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              {isArabic
                ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر تنافسي"
                : "Contact us today for a free consultation and competitive quote"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/quote"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("hero.cta")}
                <Arrow className="h-4 w-4" />
              </Link>
              <a
                href="tel:+966552238222"
                className="btn-outline inline-flex items-center gap-2"
                dir="ltr"
              >
                {t("contact.phone.number")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
