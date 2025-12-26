import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import WhyVSP from "@/components/WhyVSP";
import Achievements from "@/components/Achievements";
import TrainedColleges from "@/components/TrainedColleges";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import CRTServices from "@/components/CRTServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TeamPageRoute from "@/pages/TeamPage";
import NotFound from "@/pages/not-found";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <WhyVSP />
      <Achievements />
      <TrainedColleges />
      <Gallery />
      <Team />
      <CRTServices />
      <Contact />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Switch>
          <Route path="/">
            <div className="min-h-screen bg-background text-foreground ">
              <Navbar />
              <main>
                <HomePage />
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </Route>
          <Route path="/team" component={TeamPageRoute} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
