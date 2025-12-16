import { useTranslation } from "react-i18next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address.title"),
      content: t("contact.address.text"),
      subContent: t("contact.address.within"),
    },
    {
      icon: Phone,
      title: t("contact.phone.title"),
      content: t("contact.phone.number"),
      link: "tel:+966552238222",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      content: t("contact.email.address"),
      link: "mailto:info@riyahaljleed.com",
    },
    {
      icon: Clock,
      title: t("contact.hours.title"),
      content: t("contact.hours.weekdays"),
      subContent: t("contact.hours.weekend"),
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("contact.title")}
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl">
              {t("contact.subtitle")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              {t("contact.description")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-elevated p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-muted-foreground text-sm">
                        {item.content}
                      </p>
                      {item.subContent && (
                        <p className="text-muted-foreground/70 text-xs mt-1">
                          {item.subContent}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Map Placeholder */}
          <ScrollReveal>
            <div className="bg-secondary rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">
                  {isArabic ? "موقعنا على الخريطة" : "Our Location on Map"}
                </p>
                <p className="text-muted-foreground/70 text-sm mt-2">
                  {t("contact.address.text")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
