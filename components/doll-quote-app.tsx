"use client";

import {
  Add,
  ArrowBack,
  ArrowForward,
  AutoAwesome,
  Check,
  CheckCircle,
  ContentCopy,
  DashboardRounded,
  Delete,
  EditOutlined,
  Error,
  FavoriteBorder,
  ImageOutlined,
  Instagram,
  Launch,
  ListAlt,
  LocalFlorist,
  Menu,
  MoreHoriz,
  PhotoCameraOutlined,
  Search,
  Send,
  SettingsOutlined,
  UploadRounded,
  WhatsApp,
} from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  createTheme,
} from "@mui/material";
import { useMemo, useState } from "react";

const palette = {
  wine: "#E90046",
  rose: "#F26B92",
  blush: "#FFE2EA",
  cream: "#FFFDF0",
  ink: "#292324",
  muted: "#74686B",
  sage: "#668F16",
  paper: "#FFFEFA",
  yellow: "#FFF79A",
  lavender: "#9B5CC4",
};

const theme = createTheme({
  palette: {
    primary: { main: palette.wine },
    secondary: { main: palette.rose },
    background: { default: palette.cream, paper: palette.paper },
    text: { primary: palette.ink, secondary: palette.muted },
  },
  typography: {
    fontFamily: '"Segoe UI", Inter, Arial, sans-serif',
    h1: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, boxShadow: "none", padding: "10px 18px" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
          boxShadow: "0 10px 35px rgba(233,0,70,.06)",
          border: "1px solid #f2d9df",
        },
      },
    },
    MuiTextField: { defaultProps: { variant: "outlined" } },
  },
});

type FormData = {
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

const initialForm: FormData = {
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

const services = [
  [
    "Makeup completo",
    "Nova pintura facial, blush, sombra, lábios e detalhes do rosto.",
  ],
  ["Carving", "Alteração no formato da boca, nariz ou expressão da boneca."],
  [
    "Cílios",
    "Aplicação de cílios novos, escolhidos para combinar com o estilo.",
  ],
  ["Olhos", "Troca ou pintura dos chips para criar um novo olhar."],
  ["Sardas", "Sardinhas delicadas e naturais no rosto."],
  ["Pintinhas", "Pequenos sinais e detalhes que dão personalidade."],
  ["Boca com dentinhos", "Escultura e pintura de dentinhos aparentes."],
  ["Backplate", "Pintura decorativa na parte de trás da cabeça."],
  ["Tratamento do cabelo", "Hidratação, alinhamento e cuidado dos fios."],
  ["Pullrings", "Cordões e pingentes artesanais para o mecanismo dos olhos."],
  ["Outro", "Conte uma ideia diferente para avaliarmos juntas."],
];

const stepNames = [
  "Boas-vindas",
  "Seus dados",
  "Sua boneca",
  "Estado atual",
  "Serviços",
  "Preferências",
  "Referências",
  "Fotos",
  "Detalhes finais",
  "Revisão",
];

function ChoiceCard({
  selected,
  title,
  description,
  onClick,
  icon,
}: {
  selected: boolean;
  title: string;
  description?: string;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        p: 2,
        cursor: "pointer",
        position: "relative",
        height: "100%",
        border: selected ? `2px solid ${palette.wine}` : "1px solid #e9dfda",
        bgcolor: selected ? "#fff3f6" : "background.paper",
        boxShadow: selected ? "0 8px 24px rgba(233,0,70,.12)" : "none",
        transition: ".2s",
        "&:hover": { transform: "translateY(-2px)", borderColor: palette.rose },
      }}
    >
      {selected && (
        <CheckCircle
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: palette.wine,
            fontSize: 21,
          }}
        />
      )}
      {icon && <Box sx={{ color: palette.rose, mb: 1 }}>{icon}</Box>}
      <Typography fontWeight={700} pr={3}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          mt={0.7}
          lineHeight={1.45}
        >
          {description}
        </Typography>
      )}
    </Card>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Box mb={3}>
      <Typography
        variant="overline"
        color="primary"
        fontWeight={800}
        letterSpacing={1.4}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 34, sm: 42 }, lineHeight: 1.05, mt: 0.5 }}
      >
        {title}
      </Typography>
      {text && (
        <Typography color="text.secondary" mt={1.2} maxWidth={620}>
          {text}
        </Typography>
      )}
    </Box>
  );
}

function QuoteFlow({ onAdmin }: { onAdmin: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((old) => ({ ...old, [key]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (step === 1) {
      if (!form.name.trim())
        next.name = "Conte para a gente como podemos chamar você.";
      if (!/^\S+@\S+\.\S+$/.test(form.email))
        next.email = "Digite um e-mail válido.";
      if (form.phone.replace(/\D/g, "").length < 10)
        next.phone = "Digite um WhatsApp com DDD.";
    }
    if (step === 2 && !form.dollType)
      next.dollType = "Escolha uma opção para continuar.";
    if (step === 3 && !form.customized)
      next.customized = "Escolha uma opção para continuar.";
    if (step === 4 && !form.services.length)
      next.services = "Selecione pelo menos um serviço.";
    if (step === 6) {
      form.refs.forEach((ref, i) => {
        if (ref && !ref.toLowerCase().includes("instagram.com"))
          next[`ref${i}`] = "Cole um link válido de uma postagem do Instagram.";
      });
    }
    if (step === 7 && !form.photos.front)
      next.front = "A foto de frente é necessária para avaliar a boneca.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    setErrors({});
    setStep((s) => Math.min(s + 1, 9));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggle = (key: "services" | "currentDetails", value: string) =>
    update(
      key,
      form[key].includes(value)
        ? form[key].filter((x) => x !== value)
        : [...form[key], value],
    );

  const summary = `Pedido de orçamento — By Ivi\nCliente: ${form.name}\nBoneca: ${form.dollType}\nServiços: ${form.services.join(", ")}\nObservações: ${form.notes}`;
  const copy = async () => {
    await navigator.clipboard?.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (submitted) {
    return (
      <Box
        minHeight="100vh"
        display="grid"
        sx={{
          placeItems: "center",
          p: 2,
          background:
            "radial-gradient(circle at top,#fff59a 0,transparent 48%)",
        }}
      >
        <Card
          sx={{
            maxWidth: 540,
            width: "100%",
            p: { xs: 3, sm: 5 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              bgcolor: "#e8f0e8",
              color: palette.sage,
              display: "grid",
              placeItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <CheckCircle sx={{ fontSize: 42 }} />
          </Box>
          <Typography variant="h3" fontSize={40}>
            Pedido recebido com sucesso!
          </Typography>
          <Typography color="text.secondary" mt={1.5}>
            Agora a artista vai analisar cada detalhe com carinho e entrar em
            contato pelo WhatsApp.
          </Typography>
          <Box sx={{ bgcolor: "#f8f2ef", borderRadius: 3, p: 2, my: 3 }}>
            <Typography variant="caption" color="text.secondary">
              NÚMERO DO PEDIDO
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              #IVI-2847
            </Typography>
          </Box>
          <Stack spacing={1.2}>
            <Button
              variant="contained"
              startIcon={copied ? <Check /> : <ContentCopy />}
              onClick={copy}
            >
              {copied ? "Resumo copiado" : "Copiar resumo"}
            </Button>
            <Button variant="outlined" startIcon={<WhatsApp />}>
              Chamar no WhatsApp
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setForm(initialForm);
              }}
            >
              Fazer outro pedido
            </Button>
          </Stack>
          <Button
            size="small"
            onClick={onAdmin}
            sx={{ mt: 3, color: "text.secondary" }}
          >
            Ver demonstração da área da artista
          </Button>
        </Card>
      </Box>
    );
  }

  const screens = [
    <Box
      key="welcome"
      sx={{
        minHeight: { xs: "calc(100vh - 76px)", md: "calc(100vh - 84px)" },
        display: "grid",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.02fr .98fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Chip
              icon={<LocalFlorist />}
              label="Seu projeto começa aqui"
              sx={{ bgcolor: palette.yellow, color: palette.ink, mb: 2 }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 52, sm: 66, md: 76 },
                lineHeight: 0.94,
                maxWidth: 650,
              }}
            >
              Sua ideia, feita com{" "}
              <Box component="span" color="primary.main" fontStyle="italic">
                cor e carinho.
              </Box>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.7,
                my: 3,
                maxWidth: 580,
              }}
            >
              Monte seu pedido de customização passo a passo com a Ivi. Você
              escolhe os detalhes e referências, e a By Ivi transforma tudo em
              um orçamento claro e cheio de personalidade.
            </Typography>
            <Button
              size="large"
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={next}
            >
              Começar orçamento
            </Button>
            <Stack direction="row" spacing={3} mt={3} color="text.secondary">
              <Typography variant="caption">● Cerca de 5 minutos</Typography>
              <Typography variant="caption">● Sem compromisso</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              position: "relative",
              order: { xs: -1, md: 1 },
              maxWidth: { xs: 340, md: 500 },
              mx: "auto",
            }}
          >
            <Box
              component="img"
              src="/atelier-doll.png"
              alt="Boneca artística de cabelos ruivos"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: "28px",
                maxHeight: { xs: 390, md: 650 },
                objectFit: "cover",
                objectPosition: "center 62%",
                boxShadow: "0 25px 70px rgba(233,0,70,.14)",
              }}
            />
            <Card
              sx={{
                position: "absolute",
                bottom: 18,
                left: -20,
                p: 1.5,
                display: "flex",
                gap: 1.2,
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: palette.yellow, color: palette.wine }}>
                <AutoAwesome />
              </Avatar>
              <Box>
                <Typography fontWeight={800} variant="body2">
                  Feito à mão
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cada detalhe é único
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>,

    <Box key="data">
      <SectionTitle
        eyebrow="Etapa 1 de 9"
        title="Primeiro, vamos nos conhecer"
        text="Usaremos estes dados apenas para conversar sobre o seu orçamento."
      />
      <Stack spacing={2.2}>
        <TextField
          label="Seu nome *"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="E-mail *"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="WhatsApp com DDD *"
          placeholder="(11) 99999-9999"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          label="Seu Instagram (opcional)"
          placeholder="@seuusuario"
          value={form.instagram}
          onChange={(e) => update("instagram", e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>,

    <Box key="type">
      <SectionTitle
        eyebrow="Etapa 2 de 9"
        title="Qual o tipo da sua boneca?"
        text="Se não tiver certeza, tudo bem. A foto que você enviar depois também vai ajudar na identificação."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3,1fr)" },
          gap: 1.5,
        }}
      >
        {[
          "TBL",
          "NBL",
          "Blythe original",
          "BJD",
          "Boneca falsa",
          "Não sei identificar",
          "Outro",
        ].map((item) => (
          <ChoiceCard
            key={item}
            title={item}
            selected={form.dollType === item}
            onClick={() => update("dollType", item)}
            icon={<FavoriteBorder />}
          />
        ))}
      </Box>
      {errors.dollType && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.dollType}
        </Alert>
      )}
      {["Outro", "Não sei identificar"].includes(form.dollType) && (
        <TextField
          fullWidth
          multiline
          rows={3}
          sx={{ mt: 2 }}
          label="Conte o que você sabe sobre a boneca"
          value={form.dollOther}
          onChange={(e) => update("dollOther", e.target.value)}
        />
      )}
    </Box>,

    <Box key="state">
      <SectionTitle
        eyebrow="Etapa 3 de 9"
        title="Como ela está hoje?"
        text="Isso ajuda a artista a entender o ponto de partida e os cuidados necessários."
      />
      <Typography fontWeight={700} mb={1.5}>
        A sua boneca já é customizada?
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1.5 }}
      >
        {["Sim", "Não", "Não sei"].map((item) => (
          <ChoiceCard
            key={item}
            title={item}
            selected={form.customized === item}
            onClick={() => update("customized", item)}
          />
        ))}
      </Box>
      {errors.customized && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.customized}
        </Alert>
      )}
      {form.customized === "Sim" && (
        <Box mt={4}>
          <Typography fontWeight={700} mb={1.5}>
            Marque tudo que ela já tem
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 1.2,
            }}
          >
            {[
              "Carving",
              "Maquiagem",
              "Troca de olhos",
              "Dano ou problema visível",
            ].map((item) => (
              <ChoiceCard
                key={item}
                title={item}
                selected={form.currentDetails.includes(item)}
                onClick={() => toggle("currentDetails", item)}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>,

    <Box key="services">
      <SectionTitle
        eyebrow="Etapa 4 de 9"
        title="O que você gostaria de transformar?"
        text="Pode escolher quantos serviços quiser. As explicações ajudam mesmo quem está conhecendo este universo agora."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 1.4,
        }}
      >
        {services.map(([title, description]) => (
          <ChoiceCard
            key={title}
            title={title}
            description={description}
            selected={form.services.includes(title)}
            onClick={() => toggle("services", title)}
            icon={<AutoAwesome />}
          />
        ))}
      </Box>
      {errors.services && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errors.services}
        </Alert>
      )}
    </Box>,

    <Box key="preferences">
      <SectionTitle
        eyebrow="Etapa 5 de 9"
        title="Agora, os detalhes especiais"
        text={
          form.services.some((x) =>
            ["Carving", "Olhos", "Backplate"].includes(x),
          )
            ? "Só perguntamos o que faz sentido para os serviços que você escolheu."
            : "Suas escolhas não precisam de perguntas adicionais. Você já pode seguir em frente."
        }
      />
      <Stack spacing={4}>
        {form.services.includes("Carving") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Como você imagina a boquinha?
            </Typography>
            <OptionToggles
              value={form.carving}
              onChange={(v) => update("carving", v)}
              options={[
                "Simples e delicada",
                "Realista",
                "Com dentinhos",
                "Boca entreaberta",
                "Não sei, quero sugestão da artista",
              ]}
            />
          </Box>
        )}
        {form.services.includes("Olhos") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Que estilo de olhos você deseja?
            </Typography>
            <OptionToggles
              value={form.eyes}
              onChange={(v) => update("eyes", v)}
              options={[
                "Vermelho",
                "Azul",
                "Laranja",
                "Natural",
                "Preto",
                "Rosa",
                "Outro",
                "Não sei, quero sugestão",
              ]}
            />
          </Box>
        )}
        {form.services.includes("Backplate") && (
          <Box>
            <Typography variant="h6" fontWeight={800} mb={1.5}>
              Como deve ser o backplate?
            </Typography>
            <OptionToggles
              value={form.backplate}
              onChange={(v) => update("backplate", v)}
              options={[
                "Pintura personalizada",
                "Algo simples",
                "Não sei, quero sugestão",
                "Não quero pintura",
              ]}
            />
          </Box>
        )}
        {!form.services.some((x) =>
          ["Carving", "Olhos", "Backplate"].includes(x),
        ) && (
          <Card sx={{ p: 3, textAlign: "center", bgcolor: "#fff8c9" }}>
            <AutoAwesome color="secondary" />
            <Typography fontWeight={700} mt={1}>
              Tudo certo por aqui.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vamos escolher as referências visuais?
            </Typography>
          </Card>
        )}
      </Stack>
    </Box>,

    <Box key="refs">
      <SectionTitle
        eyebrow="Etapa 6 de 9"
        title="Escolha referências no nosso Instagram"
        text="Para respeitar o trabalho de outros artistas, usamos apenas postagens do nosso próprio portfólio."
      />
      <Card sx={{ p: 2.5, bgcolor: "#fff4f7", mb: 3 }}>
        <Stack direction="row" gap={2} alignItems="flex-start">
          <Avatar sx={{ bgcolor: palette.wine }}>
            <Instagram />
          </Avatar>
          <Box>
            <Typography fontWeight={800}>Como copiar o link</Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Abra uma postagem do portfólio, toque no botão de compartilhar e
              escolha “Copiar link”. Depois, volte aqui e cole abaixo.
            </Typography>
            <Button
              href="https://www.instagram.com/ivi.dias.weber"
              target="_blank"
              size="small"
              endIcon={<Launch />}
              sx={{ mt: 1, px: 0 }}
            >
              Abrir portfólio no Instagram
            </Button>
          </Box>
        </Stack>
      </Card>
      <Alert
        icon={<Error />}
        severity="info"
        sx={{ mb: 3, bgcolor: "#fffbea" }}
      >
        Não envie prints ou imagens de outros artistas. Use apenas links de
        postagens do nosso portfólio.
      </Alert>
      <Stack spacing={2}>
        {form.refs.map((ref, i) => (
          <Stack key={i} direction="row" gap={1} alignItems="flex-start">
            <TextField
              fullWidth
              label={`Link de referência ${i + 1} ${i === 0 ? "(opcional)" : ""}`}
              value={ref}
              onChange={(e) => {
                const refs = [...form.refs];
                refs[i] = e.target.value;
                update("refs", refs);
              }}
              error={!!errors[`ref${i}`]}
              helperText={errors[`ref${i}`]}
              placeholder="https://www.instagram.com/p/..."
            />
            {i > 0 && (
              <IconButton
                onClick={() =>
                  update(
                    "refs",
                    form.refs.filter((_, index) => index !== i),
                  )
                }
              >
                <Delete />
              </IconButton>
            )}
          </Stack>
        ))}
        {form.refs.length < 3 && (
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={() => update("refs", [...form.refs, ""])}
            sx={{ alignSelf: "flex-start" }}
          >
            Adicionar outro link
          </Button>
        )}
        <TextField
          multiline
          rows={4}
          label="O que você gostou nessas referências?"
          placeholder="Ex.: Gostei da boca delicada, das sardas suaves e dos tons rosados."
          value={form.refDescription}
          onChange={(e) => update("refDescription", e.target.value)}
        />
      </Stack>
    </Box>,

    <Box key="photos">
      <SectionTitle
        eyebrow="Etapa 7 de 9"
        title="Envie fotos da sua boneca atual"
        text="Essas fotos ajudam a artista a avaliar o estado da boneca e calcular o orçamento."
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
          gap: 1.5,
        }}
      >
        {[
          ["front", "Rosto de frente", "Obrigatória"],
          ["side", "Lateral do rosto", "Opcional"],
          ["body", "Cabelo e corpo", "Opcional"],
        ].map(([key, label, required]) => (
          <UploadCard
            key={key}
            label={label}
            required={required}
            preview={form.photos[key]}
            onChange={(value) =>
              update("photos", { ...form.photos, [key]: value })
            }
            error={key === "front" ? errors.front : undefined}
          />
        ))}
      </Box>
      <Card sx={{ mt: 3, p: 2.5, boxShadow: "none", bgcolor: "#fffbea" }}>
        <Typography fontWeight={800} mb={1}>
          Para uma boa avaliação
        </Typography>
        <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
          {[
            "Boa iluminação",
            "Sem filtro",
            "Rosto inteiro visível",
            "Fundo simples",
          ].map((x) => (
            <Chip key={x} icon={<Check />} label={x} />
          ))}
        </Stack>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          mt={2}
        >
          As imagens serão comprimidas automaticamente antes do envio.
        </Typography>
      </Card>
    </Box>,

    <Box key="notes">
      <SectionTitle
        eyebrow="Etapa 8 de 9"
        title="Qual é o clima da sua boneca?"
        text="Conte com suas palavras. Não precisa usar termos técnicos — queremos entender a sensação que você imagina."
      />
      <Typography fontWeight={700} mb={1.5}>
        Toque para adicionar uma ideia
      </Typography>
      <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} mb={2}>
        {[
          "Quero algo delicado",
          "Quero algo mais realista",
          "Quero algo colorido/fantasia",
          "Quero algo parecido com as referências",
          "Quero sugestão da artista",
        ].map((x) => (
          <Chip
            key={x}
            label={x}
            clickable
            onClick={() =>
              update("notes", form.notes ? `${form.notes}\n${x}.` : `${x}.`)
            }
            sx={{ "&:hover": { bgcolor: palette.blush } }}
          />
        ))}
      </Stack>
      <TextField
        fullWidth
        multiline
        minRows={7}
        label="Conte mais detalhes sobre o que você imagina"
        value={form.notes}
        onChange={(e) => update("notes", e.target.value)}
        placeholder="Ex.: Quero uma expressão doce, com sardinhas bem suaves..."
      />
    </Box>,

    <Box key="review">
      <SectionTitle
        eyebrow="Etapa 9 de 9"
        title="Tudo pronto para enviar"
        text="Revise o pedido. Se quiser mudar algo, toque em editar e volte à etapa correspondente."
      />
      <Stack spacing={1.5}>
        <ReviewCard
          title="Seus dados"
          onEdit={() => setStep(1)}
          lines={[form.name, form.email, form.phone, form.instagram].filter(
            Boolean,
          )}
        />
        <ReviewCard
          title="Sua boneca"
          onEdit={() => setStep(2)}
          lines={[
            form.dollType,
            form.dollOther,
            `Customizada: ${form.customized}`,
            ...form.currentDetails,
          ].filter(Boolean)}
        />
        <ReviewCard
          title="Serviços e preferências"
          onEdit={() => setStep(4)}
          chips={form.services}
          lines={
            [
              form.carving && `Boca: ${form.carving}`,
              form.eyes && `Olhos: ${form.eyes}`,
              form.backplate && `Backplate: ${form.backplate}`,
            ].filter(Boolean) as string[]
          }
        />
        <ReviewCard
          title="Referências do Instagram"
          onEdit={() => setStep(6)}
          lines={[...form.refs.filter(Boolean), form.refDescription].filter(
            Boolean,
          )}
          empty="Nenhuma referência adicionada."
        />
        <ReviewCard
          title="Fotos da boneca"
          onEdit={() => setStep(7)}
          chips={Object.keys(form.photos).map((x) =>
            x === "front"
              ? "Frente"
              : x === "side"
                ? "Lateral"
                : "Cabelo/corpo",
          )}
        />
        <ReviewCard
          title="Observações finais"
          onEdit={() => setStep(8)}
          lines={[form.notes].filter(Boolean)}
          empty="Nenhuma observação adicionada."
        />
      </Stack>
      <Alert severity="success" sx={{ mt: 3 }}>
        Seu pedido será enviado para análise. O orçamento só é confirmado depois
        da conversa com a artista.
      </Alert>
    </Box>,
  ];

  return (
    <Box minHeight="100vh">
      <ClientHeader onAdmin={onAdmin} />
      {step > 0 && (
        <Box
          sx={{
            position: "sticky",
            top: 68,
            zIndex: 5,
            bgcolor: "rgba(250,247,243,.94)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #eee5e0",
          }}
        >
          <Container maxWidth="md" sx={{ py: 1.2 }}>
            <Stack direction="row" justifyContent="space-between" mb={0.7}>
              <Typography variant="caption" fontWeight={800}>
                {stepNames[step]}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {step} de 9
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={(step / 9) * 100}
              sx={{
                height: 5,
                borderRadius: 4,
                bgcolor: "#f8d9e2",
                "& .MuiLinearProgress-bar": { borderRadius: 4 },
              }}
            />
          </Container>
        </Box>
      )}
      {step === 0 ? (
        screens[0]
      ) : (
        <Container maxWidth="md" sx={{ py: { xs: 4, sm: 7 }, pb: 14 }}>
          {screens[step]}
        </Container>
      )}
      {step > 0 && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            bgcolor: "rgba(255,254,252,.96)",
            borderTop: "1px solid #eadfda",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container maxWidth="md">
            <Stack direction="row" justifyContent="space-between" py={1.5}>
              <Button color="inherit" startIcon={<ArrowBack />} onClick={back}>
                Voltar
              </Button>
              {step < 9 ? (
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  onClick={next}
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<Send />}
                  onClick={() => setSubmitted(true)}
                >
                  Enviar pedido
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
}

function OptionToggles({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, v) => v && onChange(v)}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid #ded2cc !important",
          borderRadius: "12px !important",
          px: 2,
          textTransform: "none",
          "&.Mui-selected": {
            bgcolor: "#ffe3eb",
            color: palette.wine,
            borderColor: `${palette.wine} !important`,
          },
        },
      }}
    >
      {options.map((x) => (
        <ToggleButton key={x} value={x}>
          {x}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

function UploadCard({
  label,
  required,
  preview,
  onChange,
  error,
}: {
  label: string;
  required: string;
  preview?: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <Box>
      <Card
        sx={{
          p: 2,
          textAlign: "center",
          minHeight: 210,
          display: "grid",
          placeItems: "center",
          border: error
            ? "2px solid #d32f2f"
            : preview
              ? `2px solid ${palette.sage}`
              : "1px dashed #cdbbb3",
          boxShadow: "none",
          bgcolor: preview ? "#f4f8e9" : "background.paper",
        }}
      >
        <Box>
          {preview ? (
            <>
              <CheckCircle sx={{ fontSize: 42, color: palette.sage }} />
              <Typography fontWeight={800} mt={1}>
                Foto adicionada
              </Typography>
              <Button size="small" onClick={() => onChange("")}>
                Trocar foto
              </Button>
            </>
          ) : (
            <>
              <PhotoCameraOutlined sx={{ fontSize: 40, color: palette.rose }} />
              <Typography fontWeight={800} mt={1}>
                {label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {required}
              </Typography>
              <Button
                component="label"
                size="small"
                variant="outlined"
                startIcon={<UploadRounded />}
                sx={{ mt: 1.5 }}
              >
                Escolher foto
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onChange(URL.createObjectURL(file));
                  }}
                />
              </Button>
            </>
          )}
        </Box>
      </Card>
      {error && (
        <Typography color="error" variant="caption" display="block" mt={0.7}>
          {error}
        </Typography>
      )}
    </Box>
  );
}

function ReviewCard({
  title,
  lines = [],
  chips = [],
  onEdit,
  empty,
}: {
  title: string;
  lines?: string[];
  chips?: string[];
  onEdit: () => void;
  empty?: string;
}) {
  return (
    <Card sx={{ p: 2.5, boxShadow: "none" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={800}>{title}</Typography>
        <Button size="small" startIcon={<EditOutlined />} onClick={onEdit}>
          Editar
        </Button>
      </Stack>
      <Stack
        direction="row"
        gap={0.7}
        flexWrap="wrap"
        my={chips.length ? 1.3 : 0}
      >
        {chips.map((x) => (
          <Chip key={x} size="small" label={x} />
        ))}
      </Stack>
      {lines.map((line, i) => (
        <Typography
          key={i}
          variant="body2"
          color="text.secondary"
          sx={{ overflowWrap: "anywhere", mt: 0.4 }}
        >
          {line}
        </Typography>
      ))}
      {!lines.length && !chips.length && (
        <Typography variant="body2" color="text.secondary">
          {empty}
        </Typography>
      )}
    </Card>
  );
}

function ClientHeader({ onAdmin }: { onAdmin: () => void }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,253,240,.95)",
        color: palette.ink,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #f3d5dd",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          height={68}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" gap={1.2}>
            <Box
              component="img"
              src="/by-ivi-logo.png"
              alt="Logo By Ivi"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography
                fontFamily="Georgia, serif"
                fontSize={22}
                fontWeight={700}
                lineHeight={1}
              >
                By Ivi
              </Typography>
              <Typography variant="caption" color="text.secondary">
                por Ivi Dias Weber
              </Typography>
            </Box>
          </Stack>
          <Button
            size="small"
            color="inherit"
            startIcon={<DashboardRounded />}
            onClick={onAdmin}
          >
            Área da artista
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}

type Order = {
  id: string;
  name: string;
  initials: string;
  doll: string;
  services: string[];
  complexity: string;
  date: string;
  status: string;
  color: string;
};
const orders: Order[] = [
  {
    id: "IVI-2847",
    name: "Marina Costa",
    initials: "MC",
    doll: "Blythe original",
    services: ["Makeup", "Carving", "Sardas"],
    complexity: "Alta",
    date: "Hoje, 10:42",
    status: "Novo",
    color: "#b66e79",
  },
  {
    id: "IVI-2846",
    name: "Ana Luiza",
    initials: "AL",
    doll: "TBL",
    services: ["Olhos", "Cílios"],
    complexity: "Baixa",
    date: "Hoje, 09:18",
    status: "Novo",
    color: "#718071",
  },
  {
    id: "IVI-2844",
    name: "Beatriz M.",
    initials: "BM",
    doll: "BJD",
    services: ["Makeup", "Backplate"],
    complexity: "Média",
    date: "Ontem, 16:30",
    status: "Em análise",
    color: "#967c9f",
  },
  {
    id: "IVI-2841",
    name: "Camila Rocha",
    initials: "CR",
    doll: "NBL",
    services: ["Carving", "Dentinhos"],
    complexity: "Alta",
    date: "17 jun.",
    status: "Orçamento enviado",
    color: "#bb8b5c",
  },
  {
    id: "IVI-2839",
    name: "Juliana Reis",
    initials: "JR",
    doll: "Blythe original",
    services: ["Makeup"],
    complexity: "Média",
    date: "15 jun.",
    status: "Aprovado",
    color: "#66828a",
  },
];
const statuses = [
  "Novo",
  "Em análise",
  "Aguardando resposta",
  "Orçamento enviado",
  "Aprovado",
  "Recusado",
];

function ArtistPanel({ onClient }: { onClient: () => void }) {
  const [selected, setSelected] = useState<Order | null>(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = orders.filter(
    (o) =>
      (filter === "Todos" || o.status === filter) &&
      o.name.toLowerCase().includes(query.toLowerCase()),
  );
  const nav = <AdminNav onClient={onClient} />;
  return (
    <Box minHeight="100vh" sx={{ bgcolor: "#fffbea", display: "flex" }}>
      <CssBaseline />
      <Box
        sx={{ display: { xs: "none", md: "block" }, width: 250, flexShrink: 0 }}
      >
        {nav}
      </Box>
      <Drawer open={mobileNav} onClose={() => setMobileNav(false)}>
        {nav}
      </Drawer>
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            height: 72,
            bgcolor: "background.paper",
            borderBottom: "1px solid #e9e1dd",
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton
              sx={{ display: { md: "none" } }}
              onClick={() => setMobileNav(true)}
            >
              <Menu />
            </IconButton>
            <Box>
              <Typography fontWeight={800}>Pedidos de orçamento</Typography>
              <Typography variant="caption" color="text.secondary">
                Sexta-feira, 19 de junho
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <Avatar sx={{ bgcolor: palette.wine }}>I</Avatar>
          </Stack>
        </Box>
        {selected ? (
          <OrderDetail order={selected} onBack={() => setSelected(null)} />
        ) : (
          <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1450, mx: "auto" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4,1fr)" },
                gap: 1.5,
                mb: 3,
              }}
            >
              {[
                ["5", "Novos pedidos", "+2 hoje"],
                ["3", "Em análise", "1 aguardando"],
                ["R$ 4.850", "Orçamentos enviados", "Este mês"],
                ["2", "Aprovados", "Este mês"],
              ].map(([n, l, s]) => (
                <Card key={l} sx={{ p: 2.3, boxShadow: "none" }}>
                  <Typography variant="h4" fontSize={30}>
                    {n}
                  </Typography>
                  <Typography fontWeight={700} variant="body2">
                    {l}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s}
                  </Typography>
                </Card>
              ))}
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={1.5}
              justifyContent="space-between"
              mb={2}
            >
              <TextField
                size="small"
                placeholder="Buscar cliente..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ bgcolor: "background.paper", minWidth: 260 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Select
                size="small"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ bgcolor: "background.paper", minWidth: 190 }}
              >
                <MenuItem value="Todos">Todos os status</MenuItem>
                {statuses.map((x) => (
                  <MenuItem value={x} key={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            {filtered.length === 0 ? (
              <Card sx={{ py: 8, textAlign: "center", boxShadow: "none" }}>
                <ListAlt sx={{ fontSize: 48, color: "#cbbdb6" }} />
                <Typography variant="h5" mt={1}>
                  Nenhum pedido novo
                </Typography>
                <Typography color="text.secondary">
                  Quando chegar um pedido, ele aparece por aqui.
                </Typography>
              </Card>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: { xs: "row", xl: "column" },
                  gridAutoColumns: { xl: "minmax(285px, 1fr)" },
                  gridTemplateColumns: { xs: "1fr" },
                  gap: 2,
                  overflowX: { xl: "auto" },
                  pb: 1,
                }}
              >
                {statuses.map((status) => (
                  <Box key={status}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={1.5}
                    >
                      <Typography fontWeight={800}>{status}</Typography>
                      <Chip
                        size="small"
                        label={
                          filtered.filter((o) => o.status === status).length
                        }
                      />
                    </Stack>
                    <Stack spacing={1.5}>
                      {filtered
                        .filter((o) => o.status === status)
                        .map((o) => (
                          <OrderCard
                            key={o.id}
                            order={o}
                            onClick={() => setSelected(o)}
                          />
                        ))}
                      {filtered.filter((o) => o.status === status).length ===
                        0 && (
                        <Box
                          sx={{
                            border: "1px dashed #d9ccc5",
                            borderRadius: 3,
                            py: 4,
                            textAlign: "center",
                            color: "text.secondary",
                          }}
                        >
                          <Typography variant="body2">
                            Nenhum pedido aqui
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

function AdminNav({ onClient }: { onClient: () => void }) {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#FFF79A",
        color: palette.ink,
        p: 2,
        position: "fixed",
      }}
    >
      <Stack direction="row" gap={1.2} alignItems="center" p={1} mb={4}>
        <Box
          component="img"
          src="/by-ivi-logo.png"
          alt="Logo By Ivi"
          sx={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid white",
          }}
        />
        <Box>
          <Typography
            fontFamily="Georgia, serif"
            fontWeight={700}
            fontSize={22}
          >
            By Ivi
          </Typography>
          <Typography variant="caption" sx={{ color: "#65565b" }}>
            Ivi Dias Weber
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={0.7}>
        <Button
          variant="contained"
          startIcon={<DashboardRounded />}
          sx={{
            justifyContent: "flex-start",
            bgcolor: palette.wine,
            color: "white",
            "&:hover": { bgcolor: "#c8003c" },
          }}
        >
          Visão geral
        </Button>
        <Button
          color="inherit"
          startIcon={<ListAlt />}
          sx={{ justifyContent: "flex-start", color: palette.ink }}
        >
          Pedidos
        </Button>
        <Button
          color="inherit"
          startIcon={<SettingsOutlined />}
          sx={{ justifyContent: "flex-start", color: palette.ink }}
        >
          Configurações
        </Button>
      </Stack>
      <Box sx={{ position: "absolute", bottom: 24, left: 16, right: 16 }}>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          onClick={onClient}
          sx={{ borderColor: palette.rose, color: palette.ink }}
        >
          Ver área da cliente
        </Button>
      </Box>
    </Box>
  );
}

function OrderCard({ order, onClick }: { order: Order; onClick: () => void }) {
  const complexityColor =
    order.complexity === "Alta"
      ? "#a94c55"
      : order.complexity === "Média"
        ? "#af7c35"
        : "#5e8068";
  return (
    <Card
      onClick={onClick}
      sx={{
        p: 2.2,
        boxShadow: "none",
        cursor: "pointer",
        "&:hover": {
          borderColor: palette.rose,
          boxShadow: "0 8px 25px rgba(70,45,42,.08)",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack direction="row" gap={1.2}>
          <Avatar
            sx={{ bgcolor: order.color, width: 40, height: 40, fontSize: 14 }}
          >
            {order.initials}
          </Avatar>
          <Box>
            <Typography fontWeight={800}>{order.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              #{order.id} · {order.date}
            </Typography>
          </Box>
        </Stack>
        <IconButton size="small">
          <MoreHoriz />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 1.5 }} />
      <Typography variant="caption" color="text.secondary">
        BONECA
      </Typography>
      <Typography variant="body2" fontWeight={700}>
        {order.doll}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={0.6} my={1.5}>
        {order.services.map((x) => (
          <Chip size="small" label={x} key={x} sx={{ bgcolor: "#f3ece8" }} />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="text.secondary">
          Complexidade
        </Typography>
        <Chip
          size="small"
          label={order.complexity}
          sx={{
            bgcolor: `${complexityColor}18`,
            color: complexityColor,
            fontWeight: 800,
          }}
        />
      </Stack>
    </Card>
  );
}

function OrderDetail({ order, onBack }: { order: Order; onBack: () => void }) {
  const [status, setStatus] = useState(order.status);
  const [value, setValue] = useState("1.280,00");
  const [deadline, setDeadline] = useState("8 a 10 semanas");
  const [internal, setInternal] = useState(
    "Confirmar se a cliente aceita manter o scalp original. Avaliar pequeno risco próximo ao parafuso esquerdo.",
  );
  const [budgetNotes, setBudgetNotes] = useState(
    "O valor inclui materiais, finalização fosca e embalagem de proteção.",
  );
  const message = useMemo(
    () =>
      `Oi, ${order.name.split(" ")[0]}! Recebi seu pedido de orçamento.\n\nPelo que você selecionou:\n• ${order.services.join("\n• ")}\n\nAnalisei as fotos e referências enviadas.\nO valor estimado ficou em R$ ${value}.\nO prazo aproximado é de ${deadline}.\n\nAntes de confirmar, preciso validar:\n${internal}\n\nObrigada!`,
    [order, value, deadline, internal],
  );
  const [editableMessage, setEditableMessage] = useState(message);
  const [copied, setCopied] = useState(false);
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1250, mx: "auto" }}>
      <Button
        startIcon={<ArrowBack />}
        color="inherit"
        onClick={onBack}
        sx={{ mb: 2 }}
      >
        Voltar para pedidos
      </Button>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={2}
        mb={3}
      >
        <Stack direction="row" gap={1.5} alignItems="center">
          <Avatar sx={{ bgcolor: order.color, width: 52, height: 52 }}>
            {order.initials}
          </Avatar>
          <Box>
            <Typography variant="h4">{order.name}</Typography>
            <Typography color="text.secondary">
              Pedido #{order.id} · recebido {order.date.toLowerCase()}
            </Typography>
          </Box>
        </Stack>
        <FormControl
          size="small"
          sx={{ minWidth: 220, bgcolor: "background.paper" }}
        >
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statuses.map((x) => (
              <MenuItem key={x} value={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 380px" },
          gap: 2,
        }}
      >
        <Stack spacing={2}>
          <DetailSection title="Dados da cliente">
            <InfoGrid
              items={[
                ["E-mail", "marina.costa@email.com"],
                ["WhatsApp", "(11) 98765-4321"],
                ["Instagram", "@marinacosta"],
              ]}
            />
          </DetailSection>
          <DetailSection title="Boneca e estado atual">
            <InfoGrid
              items={[
                ["Tipo", order.doll],
                ["Já customizada", "Sim"],
                ["O que já tem", "Makeup e troca de olhos"],
                ["Dano visível", "Pequeno risco perto do parafuso"],
              ]}
            />
          </DetailSection>
          <DetailSection title="Serviços solicitados">
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {order.services.map((x) => (
                <Chip
                  key={x}
                  icon={<Check />}
                  label={x}
                  sx={{ bgcolor: "#f4e7e4", color: palette.wine }}
                />
              ))}
            </Stack>
            <Typography variant="body2" mt={2}>
              <b>Boquinha:</b> simples e delicada, levemente entreaberta.
            </Typography>
            <Typography variant="body2" mt={0.7}>
              <b>Estilo:</b> delicado, sardas suaves e tons rosados.
            </Typography>
          </DetailSection>
          <DetailSection title="Referências do Instagram">
            {[
              "https://instagram.com/p/atelier-ref-01",
              "https://instagram.com/p/atelier-ref-02",
            ].map((link, i) => (
              <Card
                key={link}
                sx={{ p: 2, mb: 1.2, boxShadow: "none", bgcolor: "#faf5f2" }}
              >
                <Stack direction="row" alignItems="center" gap={1.2}>
                  <Avatar sx={{ bgcolor: "#e8d4cf", color: palette.wine }}>
                    <Instagram />
                  </Avatar>
                  <Box flex={1} minWidth={0}>
                    <Typography variant="body2" fontWeight={700} noWrap>
                      {link}
                    </Typography>
                    <Button
                      size="small"
                      href={link}
                      target="_blank"
                      endIcon={<Launch />}
                      sx={{ px: 0 }}
                    >
                      Abrir referência
                    </Button>
                  </Box>
                </Stack>
                <TextField
                  fullWidth
                  size="small"
                  label="O que considerar dessa referência?"
                  placeholder={
                    i ? "Ex.: apenas as sardas" : "Ex.: formato da boca"
                  }
                  sx={{ mt: 1.5, bgcolor: "white" }}
                />
              </Card>
            ))}
          </DetailSection>
          <DetailSection title="Fotos da boneca">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 1,
              }}
            >
              {["Frente", "Lateral", "Cabelo/corpo"].map((x, i) => (
                <Box
                  key={x}
                  sx={{
                    aspectRatio: "1",
                    borderRadius: 3,
                    bgcolor: i === 0 ? "#eadbd4" : "#e8e2dd",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <ImageOutlined sx={{ color: "#9f8d85" }} />
                    <Typography variant="caption" display="block">
                      {x}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </DetailSection>
          <DetailSection title="Observações da cliente">
            <Typography variant="body2" color="text.secondary">
              Quero que ela fique muito delicada e sonhadora. Gosto da boca da
              primeira referência e das sardinhas da segunda. Pode usar sua
              sensibilidade para escolher os tons.
            </Typography>
          </DetailSection>
        </Stack>
        <Stack spacing={2}>
          <Card
            sx={{
              p: 2.5,
              boxShadow: "none",
              position: { lg: "sticky" },
              top: { lg: 90 },
            }}
          >
            <Typography variant="h5" mb={2}>
              Montar orçamento
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Valor estimado"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Prazo estimado"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <TextField
                multiline
                rows={3}
                label="Observações do orçamento"
                value={budgetNotes}
                onChange={(e) => setBudgetNotes(e.target.value)}
              />
              <TextField
                multiline
                rows={4}
                label="Observações internas da artista"
                value={internal}
                onChange={(e) => setInternal(e.target.value)}
                helperText="A cliente não verá estas anotações."
              />
              <Divider />
              <Typography fontWeight={800}>Mensagem para WhatsApp</Typography>
              <TextField
                multiline
                minRows={12}
                value={editableMessage}
                onChange={(e) => setEditableMessage(e.target.value)}
              />
              <Button
                variant="contained"
                startIcon={copied ? <Check /> : <ContentCopy />}
                onClick={async () => {
                  await navigator.clipboard?.writeText(editableMessage);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                {copied ? "Mensagem copiada" : "Copiar mensagem"}
              </Button>
              <Button variant="outlined" startIcon={<WhatsApp />}>
                Abrir WhatsApp
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card sx={{ p: { xs: 2, sm: 2.5 }, boxShadow: "none" }}>
      <Typography variant="h5" mb={2}>
        {title}
      </Typography>
      {children}
    </Card>
  );
}
function InfoGrid({ items }: { items: string[][] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 2,
      }}
    >
      {items.map(([label, value]) => (
        <Box key={label}>
          <Typography variant="caption" color="text.secondary">
            {label.toUpperCase()}
          </Typography>
          <Typography variant="body2" fontWeight={700}>
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export function DollQuoteApp() {
  const [mode, setMode] = useState<"client" | "admin">("client");
  return (
    <ThemeProvider theme={theme}>
      {mode === "client" ? (
        <QuoteFlow onAdmin={() => setMode("admin")} />
      ) : (
        <ArtistPanel onClient={() => setMode("client")} />
      )}
    </ThemeProvider>
  );
}
