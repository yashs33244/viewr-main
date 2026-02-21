import { Container, Icons, Wrapper, CalendlyButton } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { calendlyUrl } from "@/config";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronRight,
  UserIcon,
  Zap,
  Shield,
  Settings,
  Clock,
  Brain,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const bentoFeatures = [
    {
      title: "Real-Time Analytics",
      description:
        "Seamlessly integrate with your existing systems and infrastructure.",
      icon: Settings,
      className: "",
    },
    {
      title: "Advanced Security",
      description:
        "Enterprise-grade encryption and protection for your critical data.",
      icon: Shield,
      className: "md:col-span-2 ",
      gradient: "",
    },
    {
      title: "24/7 Monitoring",
      description:
        "Round-the-clock surveillance and real-time threat detection.",
      icon: Clock,
      className: "",
      gradient: "",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Intelligent video analysis to identify patterns and anomalies.",
      icon: Brain,
      className: "md:col-span-2",
      gradient: "",
    },
    {
      title: "Multi-Location Support",
      description:
        "Manage multiple locations from a single, unified dashboard.",
      icon: Globe,
      className: "",
      gradient: "",
    },
    {
      title: "AI Recognition",
      description:
        "98% accurate facial recognition and object detection powered by advanced AI.",
      icon: Brain,
      className: "md:row-span-1",
      gradient: "",
    },
  ];

  const aboutStats = [
    {
      label: "Installations",
      value: "983+",
      description: "Successful deployments",
    },
    { label: "Patents", value: "9+", description: "AI innovations" },
    {
      label: "Guaranteed Accuracy",
      value: "96%+",
      description: "Recognition rate",
    },
    { label: "Support", value: "24/7", description: "Always available" },
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8 pt-24">
      {/* hero */}
      <Wrapper id="hero">
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                99% Accurate
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                Advanced AI Surveillance That Never Sleeps
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                Transform your security with ViewR's intelligent surveillance
                platform. Get 98% accuracy in recognition with real-time
                analytics and smart alerts.
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <CalendlyButton
                  url={calendlyUrl}
                  className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                    ✨ {"  "} Book a demo and see ViewR in action!
                  </p>
                  <Button
                    size="sm"
                    className="rounded-full hidden lg:flex border border-foreground/20"
                  >
                    Book Demo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CalendlyButton>
              </div>
            </div>

            <div className="relative flex items-center py-10 md:py-20 w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

              {/* Additional gradient orbs around video */}
              {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-400/15 via-indigo-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/15 via-red-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
               */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[1000px] md:h-[1000px] bg-gradient-to-bl from-blue-500/50 via-indigo-500/40 to-transparent rounded-full blur-[40px] md:blur-[80px] -z-10"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[950px] md:h-[950px] bg-gradient-to-tr from-cyan-400/45 via-blue-400/35 to-transparent rounded-full blur-[45px] md:blur-[90px] -z-10"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[900px] md:h-[900px] bg-gradient-to-r from-indigo-400/50 via-blue-300/30 to-transparent rounded-full blur-[35px] md:blur-[70px] -z-10"></div>

              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl relative">
                <div className="relative z-20">
                  <HeroVideoDialog
                    className="w-full"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/bZQpH4AbE3E?si=kvRFcWJh1FGmLdzJ"
                    thumbnailSrc="/showcase/images/thumbnail.png"
                    thumbnailAlt="ViewR AI Surveillance Demo"
                  />
                </div>
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* how it works */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        {/* How it works gradients */}
        <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/12 via-green-500/6 to-transparent rounded-full blur-[70px] -z-10"></div>
        <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-teal-500/10 via-cyan-500/5 to-transparent rounded-full blur-[80px] -z-10"></div>

        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="How It Works" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Three steps to secure your premises
            </h2>
            <p className="text-muted-foreground mt-6">
              Get started with ViewR's AI surveillance in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* bento grid features */}
      <Wrapper
        id="solutions"
        className="flex flex-col items-center justify-center py-12 relative "
      >
        <div className="hidden md:block absolute top-0 -left-1/3 w-72 h-72 bg-purple-600/40 rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -right-1/3 w-72 h-72 bg-blue-600/30 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Advanced Solutions" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Advanced Security Technologies
            </h2>
            <p className="text-muted-foreground mt-6">
              Our enterprise security solutions leverage cutting-edge AI and
              machine learning to provide unparalleled protection for your
              business assets and data.
            </p>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4 py-10 md:py-20 w-full max-w-6xl mx-auto">
            {bentoFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className={cn(
                  "relative overflow-hidden border-0 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 group",
                  "",
                  "before:absolute before:inset-0 before:rounded-lg before:p-[1px]  before:from-purple-500/20 before:via-transparent before:to-blue-500/20",
                  "after:absolute after:inset-[1px] border border-white/10 after:rounded-lg ",
                  feature.className
                )}
              >
                <CardContent className="relative z-10 p-6 h-full flex flex-col">
                  <div
                    className={cn(
                      "absolute inset-0  opacity-10 rounded-lg",
                      feature.gradient
                    )}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* features */}
      <Wrapper
        id="features"
        className="flex flex-col items-center justify-center py-12 relative"
      >
        {/* Enhanced gradient orbs for features section */}

        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Features" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Powerful AI surveillance features
            </h2>
            <p className="text-muted-foreground mt-6">
              ViewR offers advanced AI-powered features to keep your premises
              secure with intelligent monitoring
            </p>
            <div className="mt-8">
              <ul className="text-sm text-muted-foreground space-y-2 max-w-lg mx-auto">
                <li>• Facial recognition and object detection</li>
                <li>• Behavioral analytics and anomaly detection</li>
                <li>• Seamless integration with existing systems</li>
                <li>• Customizable alerts and notifications</li>
              </ul>
            </div>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* about us */}
      <Wrapper
        id="about"
        className="flex flex-col items-center justify-center py-12 relative"
      >
        {/* About section gradients */}
        <div className="absolute top-0 -right-1/3 w-[700px] h-[700px] bg-gradient-to-bl from-amber-500/12 via-yellow-500/6 to-transparent rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 -left-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-rose-500/10 via-pink-500/5 to-transparent rounded-full blur-[120px] -z-10"></div>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionBadge title="About Us" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Pioneering the industry with AI-powered surveillance solutions
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">
              Featuring cutting-edge technology and unmatched accuracy.
            </p>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 md:py-20 w-full">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* pricing */}
      <Wrapper
        id="pricing"
        className="flex flex-col items-center justify-center py-12 relative"
      >
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Pricing" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Choose the perfect plan for your security needs
            </h2>
            <p className="text-muted-foreground mt-6">
              Select the ideal ViewR plan for your organization and start
              securing your premises with AI surveillance
            </p>
          </div>
        </Container>
        <Container className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700",
                  card.title === "Professional" && "border-2 border-primary"
                )}
              >
                <CardHeader className="border-b border-border">
                  <span>{card.title}</span>
                  <CardTitle
                    className={cn(
                      card.title !== "Professional" && "text-muted-foreground"
                    )}
                  >
                    {card.price}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 fill-primary text-primary" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <CalendlyButton
                    url={calendlyUrl}
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                      card.title !== "Professional" &&
                        "!bg-foreground !text-background"
                    )}
                  >
                    {card.buttonText}
                  </CalendlyButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* testimonials */}
      <Wrapper
        id="testimonials"
        className="flex flex-col items-center justify-center py-12 relative"
      >
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Customer Success" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What our customers are saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how ViewR transforms security operations for businesses across
              India. Real testimonials from real customers.
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* newsletter */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                Secure Your Future <br /> with AI Surveillance
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Experience ViewR's 98% accurate AI surveillance platform and
                transform your security operations today
              </p>
              <CalendlyButton url={calendlyUrl} className="mt-6">
                <Button variant="white">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CalendlyButton>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Stay Updated with ViewR
                </h4>
                <p className="text-base text-muted-foreground">
                  Get the latest updates on AI surveillance technology and
                  security insights
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
