export type QuoteFormData = {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  dollType: string;
  dollOther: string;
  customized: string;
  currentDetails: string[];
  services: string[];
  carving: string;
  eyes: string;
  backplate: string;
  refs: string[];
  refDescription: string;
  photos: Record<string, string>;
  notes: string;
};

export const initialForm: QuoteFormData = {
  name: "",
  email: "",
  phone: "",
  instagram: "",
  dollType: "",
  dollOther: "",
  customized: "",
  currentDetails: [],
  services: [],
  carving: "",
  eyes: "",
  backplate: "",
  refs: [""],
  refDescription: "",
  photos: {},
  notes: "",
};
