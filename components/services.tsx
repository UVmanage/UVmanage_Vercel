import {
  TrendingUp,
  Settings2,
  Users,
  MessageCircle,
  Shield,
  Contact,
} from "lucide-react";

const services = [
{
  icon: TrendingUp,
  title: "Content Strategy & Analytics",
  description:
    "Performance-driven content strategy built from your data. We analyze trends, past posts, and audience behavior to guide content direction, refine ideas, and improve reach over time.",
},
{
  icon: Settings2,
  title: "Account Optimization",
  description:
    "Profile optimization built to convert attention into subscribers. We refine your bio, highlights, pricing structure, and content positioning to improve first-impression conversion.",
},
{
  icon: Users,
  title: "Content Execution & Distribution",
  description:
    "Consistent posting without the mental load. We handle editing, scheduling, captions, and cross-platform distribution while adapting output based on performance.",
},
{
  icon: MessageCircle,
  title: "Chatting & Monetization",
  description:
    "24/7 fan engagement focused on relationship-building and sales. Our trained chatters monetize naturally using conversion data, not scripted replies.",
},
{
  icon: Shield,
  title: "DMCA & Content Protection",
  description:
    "Active monitoring and takedowns to protect your revenue. We detect and remove stolen content so leaks don’t silently cap your income.",
},
{
  icon: Contact,
  title: "Ongoing Strategic Support",
  description:
    "Weekly insights, adjustments, and guidance as your account evolves. You always know what’s changing, why it’s changing, and where to focus next.",
},

];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Everything Between You and More Money
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            You create content. We handle everything else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
