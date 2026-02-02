import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I stopped living in my DMs and finally felt in control again.",
    author: "Sarah G.",
    role: "$4k → $19k/month",
    metric: "+475% Revenue",
  },
  {
    quote:
      "Chats started converting without me being online all day.",
    author: "Anonymous",
    role: "Solo → Managed",
    metric: "1:8 Chatting Ratio",
  },
  {
    quote:
      "The first agency that didn’t trap me in a contract",
    author: "Evelyn H.",
    role: "Burned by Past OFM",
    metric: "+$15K Revenue",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Real Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Success stories from creators who trusted us with their brand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
