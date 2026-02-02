import { ChartColumnDecreasing , MessageSquareText, ShieldCheck  } from "lucide-react";

const values = [
  {
    icon: ChartColumnDecreasing,
    title: "Working Hard, No Growth?",
    description:
      "Posting more doesn’t fix a broken funnel. We rebuild the structure behind your revenue so effort finally compounds.",
  },
  {
    icon: MessageSquareText,
    title: "Tired Of Chatting?",
    description:
      "Our trained chatters sell naturally, build relationships, and monetize without sounding robotic or desperate.",
  },
  {
    icon: ShieldCheck ,
    title: "Money Leaking Everywhere?",
    description:
      "From bad promos to leaks and weak upsells — we find where revenue escapes and close the gaps.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
            WHY MOST CREATORS STALL
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
            Hard Work Isn’t the Problem. <br/> Broken Backend Systems Are.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most creators don't fail because of content.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            They stall because they're trying to:
          </p>
          <ul className="space-y-3 mb-8 text-muted-foreground text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Answer DMs all day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Manage promotions manually</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Track numbers they don't understand</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Fix leaks after money is already lost</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At $2k–$10k/month, effort stops being the solution. Systems are.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We build and run those systems for you.
          </p>
        </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 flex gap-5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
