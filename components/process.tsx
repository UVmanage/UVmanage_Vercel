export function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "We audit your content, chats, and funnels to find what’s capping revenue.",
    },
    {
      number: "02",
      title: "Install Systems",
      description:
        "Chatting, posting, funnels, analytics — built and launched fast.",
    },
    {
      number: "03",
      title: "Optimize Weekly",
      description:
        "We track performance, adjust strategy, and remove new bottlenecks.",
    },
    {
      number: "04",
      title: "Scale Without Burnout",
      description:
        "As revenue grows, your workload stays the same",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
