import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { User } from "lucide-react";

const Leadership = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const team = ["ceo", "coo", "technical", "projects"];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("leadership.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("leadership.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("leadership.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member} delay={index * 0.1}>
                <div className="card-elevated overflow-hidden group">
                  <div className="h-56 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {t(`leadership.team.${member}.name`)}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {t(`leadership.team.${member}.role`)}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {t(`leadership.team.${member}.bio`)}
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

export default Leadership;
