
import { WhatsApp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Halo, saya tertarik dengan jasa pengecatan Dimas Paint Jogja" 
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters)
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    
    // Create WhatsApp URL with encoded message
    const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
      size="icon"
      aria-label="Chat via WhatsApp"
    >
      <WhatsApp size={28} className="text-white" />
    </Button>
  );
}
