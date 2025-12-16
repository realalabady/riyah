import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const services = [
    t("services.items.centralAC.title"),
    t("services.items.installation.title"),
    t("services.items.maintenance.title"),
    t("services.items.commercial.title"),
    t("services.items.residential.title"),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">
                  ر
                </span>
              </div>
              <div>
                <p className="font-bold text-lg">
                  {isArabic ? "رياح الجليد" : "Riyah Al-Jaleed"}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {isArabic ? "للتكييف المركزي" : "Central AC"}
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {t("contact.address.text")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+966552238222"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {t("contact.phone.number")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@riyahaljleed.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {t("contact.email.address")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} {t("company.name")}.{" "}
              {t("footer.rights")}.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-accent transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
