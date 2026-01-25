export interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
    color: "primary" | "secondary" | "accent";
  };
  index: number;
}
