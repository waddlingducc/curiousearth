import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { CategoryPage } from "@/components/CategoryPage";
import { ArticlePage } from "@/components/ArticlePage";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Disclaimer from "@/pages/disclaimer";
import Editorial from "@/pages/editorial";
import Authors from "@/pages/authors";
import FAQ from "@/pages/faq";
import Glossary from "@/pages/glossary";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/editorial" component={Editorial} />
        <Route path="/authors" component={Authors} />
        <Route path="/faq" component={FAQ} />
        <Route path="/glossary" component={Glossary} />

        <Route path="/astronomy">{() => <CategoryPage category="astronomy" />}</Route>
        <Route path="/biology">{() => <CategoryPage category="biology" />}</Route>
        <Route path="/geology">{() => <CategoryPage category="geology" />}</Route>
        <Route path="/ecology">{() => <CategoryPage category="ecology" />}</Route>
        <Route path="/weather">{() => <CategoryPage category="weather" />}</Route>

        <Route path="/astronomy/:slug" component={ArticlePage} />
        <Route path="/biology/:slug" component={ArticlePage} />
        <Route path="/geology/:slug" component={ArticlePage} />
        <Route path="/ecology/:slug" component={ArticlePage} />
        <Route path="/weather/:slug" component={ArticlePage} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
