
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";

// Layouts
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetail from "./pages/PortfolioDetail";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>Dimas Paint Jogja - Body Repair & Pengecatan Profesional</title>
      <meta name="description" content="Jasa body repair dan pengecatan profesional untuk mobil dan motor di Yogyakarta dengan hasil premium dan tahan lama." />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
