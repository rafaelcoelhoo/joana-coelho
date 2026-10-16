// Edita este ficheiro para mudar nomes, contactos, preços e fotos do site.

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

export const site = {
  brand: "Doce Fórmula",
  owner: "Joana Coelho",
  role: "Farmacêutica & pasteleira por paixão",
  city: "Espinho",
  region: "Espinho · Aveiro, Portugal",
  phoneDisplay: "+351 925 785 097",
  whatsappNumber: "351925785097",
  email: "encomendas@doceformula.pt",
  instagram: "doceformula.espinho",
  hours: [
    { days: "Segunda a sexta", time: "Encomendas por mensagem" },
    { days: "Sábado", time: "Levantamentos 10h – 13h" },
    { days: "Domingo", time: "Só eventos agendados" },
  ],
  // Coloca a foto em /public/images/ e escreve aqui o caminho, ex: "/images/joana.jpg"
  ownerPhoto: '/images/joana-coelho.webp' as string | null,
  heroImage: unsplash("photo-1630953899650-0ee223bb29d6", 1400),
  heroDetailImage: unsplash("photo-1630953900113-ab915924aab2", 600),
}

export type Brigadeiro = {
  code: string
  name: string
  composition: string
  note?: string
}

export const brigadeiros: Brigadeiro[] = [
  {
    code: "BRG-TR",
    name: "Tradicional",
    composition: "Chocolate 54% cacau, leite condensado, granulado belga",
    note: "O mais pedido",
  },
  {
    code: "BRG-NN",
    name: "Ninho com Nutella",
    composition: "Leite em pó, recheio de creme de avelã",
  },
  {
    code: "BRG-PS",
    name: "Pistácio",
    composition: "Pasta de pistácio siciliano, pistácio picado",
  },
  {
    code: "BRG-MR",
    name: "Maracujá",
    composition: "Polpa de maracujá, chocolate branco",
  },
  {
    code: "BRG-CF",
    name: "Café",
    composition: "Café expresso, chocolate de leite, cacau em pó",
  },
  {
    code: "BRG-BJ",
    name: "Beijinho",
    composition: "Coco ralado fresco, cravinho a decorar",
  },
  {
    code: "BRG-BP",
    name: "Bicho-de-pé",
    composition: "Morango, açúcar cristal",
  },
  {
    code: "BRG-CH",
    name: "Churros",
    composition: "Doce de leite, açúcar e canela",
  },
]

export type PriceItem = {
  id: string
  name: string
  detail: string
  price: number
  unit: string
  from?: boolean
}

export const brigadeiroBoxes: PriceItem[] = [
  { id: "box-6", name: "Caixa de 6", detail: "Até 3 sabores", price: 6.5, unit: "caixa" },
  { id: "box-12", name: "Caixa de 12", detail: "Até 4 sabores", price: 12, unit: "caixa" },
  { id: "box-24", name: "Caixa de 24", detail: "Até 6 sabores", price: 22, unit: "caixa" },
  {
    id: "event-50",
    name: "Eventos (mín. 50)",
    detail: "Forminhas à escolha, todos os sabores",
    price: 0.85,
    unit: "unid.",
  },
]

export const cakes: PriceItem[] = [
  {
    id: "cake-choc",
    name: "Bolo de chocolate com brigadeiro",
    detail: "1 kg · 8 a 10 fatias",
    price: 25,
    unit: "bolo",
  },
  {
    id: "cake-carrot",
    name: "Bolo de cenoura com cobertura",
    detail: "Cobertura de chocolate · 8 fatias",
    price: 18,
    unit: "bolo",
  },
  {
    id: "cake-redvelvet",
    name: "Red velvet",
    detail: "Creme de queijo · 10 a 12 fatias",
    price: 30,
    unit: "bolo",
  },
  {
    id: "cake-naked",
    name: "Naked cake de frutos vermelhos",
    detail: "Dois andares · 15 a 20 fatias",
    price: 38,
    unit: "bolo",
  },
  {
    id: "cake-custom",
    name: "Bolo personalizado",
    detail: "Aniversários, batizados, temas",
    price: 40,
    unit: "bolo",
    from: true,
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    detail: "Mínimo 6 unidades",
    price: 2.5,
    unit: "unid.",
  },
]

export const orderableItems: PriceItem[] = [...brigadeiroBoxes, ...cakes]

export const galleryImages = [
  { src: unsplash("photo-1630953899953-d33923a97172"), alt: "Brigadeiros de chocolate num prato branco", tall: true },
  { src: unsplash("photo-1558301211-0d8c8ddee6ec"), alt: "Bolo decorado com pasta de açúcar num suporte" },
  { src: unsplash("photo-1606890737304-57a1ca8a5b62"), alt: "Fatia de bolo de chocolate com morango" },
  { src: unsplash("photo-1621303837174-89787a7d4729"), alt: "Bolo rosa e branco de aniversário", tall: true },
  { src: unsplash("photo-1702982852429-e0d0b27eb990"), alt: "Brigadeiros cobertos de granulado num prato" },
  { src: unsplash("photo-1578922864601-79dcc7cbcea9"), alt: "Tabuleiro de cupcakes cor-de-rosa" },
  { src: unsplash("photo-1551879403-6adb554966fd"), alt: "Bolo branco e rosa com vela acesa", tall: true },
  { src: unsplash("photo-1702982841001-f65535a5a40b"), alt: "Taça em forma de coração com doces de chocolate" },
  { src: unsplash("photo-1685708441240-14e2c711fc5c"), alt: "Mesa de festa com bolos e doces variados" },
]

export const testimonials = [
  {
    quote:
      "Encomendei 100 brigadeiros para o batizado da minha filha e desapareceram em meia hora. O de pistácio é viciante.",
    name: "Marta S.",
    context: "Batizado · Espinho",
  },
  {
    quote:
      "A Joana fez o bolo de anos do meu pai com uma atenção ao detalhe incrível. E sabia exatamente o que fazer com a intolerância à lactose da minha mãe.",
    name: "Rui P.",
    context: "Aniversário · Silvalde",
  },
  {
    quote:
      "Levei uma caixa de 24 para a farmácia no dia de anos de uma colega. Agora pedem-me todos os meses.",
    name: "Joana C.",
    context: "Colega de profissão",
  },
]

export const faqs = [
  {
    q: "Com quanta antecedência devo encomendar?",
    a: "Para caixas de brigadeiros, 3 dias costumam chegar. Para bolos, 5 a 7 dias. Para eventos e bolos personalizados, idealmente 2 a 3 semanas, sobretudo em época de batizados e comunhões.",
  },
  {
    q: "Fazem entregas?",
    a: "Sim, em Espinho a entrega é gratuita para encomendas acima de 25 €. Para Silvalde, Paramos, Anta, Esmoriz e Gaia sul há uma pequena taxa a combinar. Também pode levantar em Espinho.",
  },
  {
    q: "Têm opções para alergias e intolerâncias?",
    a: "Sim. Como farmacêutica, levo os alergénios muito a sério: todas as encomendas vêm com a lista de ingredientes. Há opções sem lactose e sem glúten em alguns sabores, preparados com cuidado para evitar contaminações. Fale comigo antes de encomendar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Para confirmar a encomenda é pedido um sinal de 50% por MB WAY ou transferência. O restante é pago no momento do levantamento ou da entrega.",
  },
  {
    q: "Quanto tempo duram os brigadeiros?",
    a: "Até 5 dias no frigorífico, em caixa fechada. Tire-os 15 minutos antes de servir para ficarem cremosos.",
  },
]

export const steps = [
  { title: "Escolha", text: "Veja os sabores e tamanhos e monte o seu pedido aqui no site." },
  { title: "Confirme", text: "O pedido segue por WhatsApp. Confirmo a data e o sinal de 50%." },
  { title: "Saboreie", text: "Levante em Espinho ou receba em casa, fresquinho no dia." },
]

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(value)

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

export const withBasePath = (path: string) =>
  path.startsWith("http") ? path : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
